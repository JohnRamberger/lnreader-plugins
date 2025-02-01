import { CheerioAPI, load as parseHTML } from 'cheerio';
import { fetchApi } from '@libs/fetch';
import { Plugin } from '@typings/plugin';
import { Filters, FilterTypes } from '@libs/filterInputs';

type FilterResponseDataGenre = {
  id: number;
  name: string;
  slug: string;
};

type FilterResponseData = {
  title: string;
  alt_title: string;
  id: number;
  genres: FilterResponseDataGenre[];
  cover: string;
  description: string;
  status: string;
  slug: string;
};

type FilterResponse = {
  data: FilterResponseData[];
  metadata: {
    current_page: number;
    per_page: number;
    total_page: number;
    total_series: number;
  };
};

type ChapterListReponseDataLocked = {
  price: number;
};

type ChapterListReponseData = {
  name?: string;
  title?: string;
  number: number;
  locked: ChapterListReponseDataLocked;
  created_at: string;
};

type ChaperListResponse = ChapterListReponseData[];

class NovelFull implements Plugin.PluginBase {
  id = 'fenrirrealm';
  name = 'FenrirRealm';
  version = '0.0.0';
  icon = 'src/en/fenrirrealm/icon.png';
  site = 'https://fenrirealm.com/';

  async fetchNovels(queryParams: URLSearchParams): Promise<Plugin.NovelItem[]> {
    const url = `${this.site}api/novels/filter?${queryParams.toString()}`;

    const response = (await fetchApi(url).then(r =>
      r.json(),
    )) as FilterResponse;

    const novels: Plugin.NovelItem[] = response.data.map(res => {
      return {
        name: res.title,
        cover: this.site + res.cover,
        path: res.slug,
      };
    });

    return novels;
  }

  async popularNovels(
    page: number,
    { filters, showLatestNovels }: Plugin.PopularNovelsOptions<Filters>,
  ): Promise<Plugin.NovelItem[]> {
    const params = new URLSearchParams();

    params.append('page', page.toString());
    params.append('per_page', '100');

    if (showLatestNovels) {
      params.append('order', 'lastest');
    } else {
      // add all filters
      params.append('order', filters.sort.value.toString());
      params.append('status', filters.status.value.toString());

      if (filters.genre.value != '') {
        params.append('genres[]', filters.genre.value.toString());
      }

      if (filters.staff.value != '') {
        params.append('staff', filters.staff.value.toString());
      }
    }

    return this.fetchNovels(params);
  }

  async fetchChapters(slug: string): Promise<Plugin.ChapterItem[]> {
    const chapterListUrl = this.site + 'api/novels/chapter-list/' + slug;

    const data = (await fetchApi(chapterListUrl).then(r =>
      r.json(),
    )) as ChaperListResponse;

    return data
      .filter(it => it.locked.price <= 0) // Filter out locked chapters
      .map(chapter => {
        let title = chapter.title?.trim();

        if (!title || title == '') {
          title = chapter.name?.trim();
        }

        return {
          name: title || `Chapter ${chapter.number}`,
          path: `series/${slug}/chapter-${chapter.number}`,
          chapterNumber: chapter.number,
          releaseTime: chapter.created_at,
        };
      });
  }

  async parseNovel(novelPath: string): Promise<Plugin.SourceNovel> {
    const body = await fetchApi(`${this.site}series/${novelPath}`).then(r =>
      r.text(),
    );

    const loadedCheerio = parseHTML(body);

    const cover = loadedCheerio('meta[property="og:image"]').attr('content');

    const novel: Plugin.SourceNovel = {
      path: novelPath,
      name: loadedCheerio('h1.text-xl').text(),
      cover: cover,
      summary: loadedCheerio('div.synopsis > div.overflow-hidden')
        .html()
        ?.trim(),
      status: loadedCheerio('span.bg-primary').text().trim(),
      chapters: [],
    };

    novel.author = loadedCheerio('span.bg-primary + a').text();

    novel.genres = loadedCheerio('a[href*="genre"]')
      .map((idx, ele) => {
        return loadedCheerio(ele).text().trim();
      })
      .toArray()
      .join(',');

    novel.chapters = await this.fetchChapters(novelPath);

    return novel;
  }

  async parseChapter(chapterPath: string): Promise<string> {
    const body = await fetchApi(this.site + chapterPath).then(r => r.text());

    const loadedCheerio = parseHTML(body);
    const chapterText = loadedCheerio('#reader-area').html() || '';

    return chapterText;
  }

  async searchNovels(
    searchTerm: string,
    page: number,
  ): Promise<Plugin.NovelItem[]> {
    const params = new URLSearchParams();

    params.append('search', searchTerm);
    params.append('page', page.toString());
    params.append('per_page', '100');

    return this.fetchNovels(params);
  }

  filters = {
    sort: {
      // NOTE: as of now this filter does nothing on the site, maybe it will fix itself in the future
      value: 'popular',
      label: 'Sort',
      options: [
        { label: 'Latest', value: 'lastest' },
        { label: 'Popular', value: 'popular' },
        { label: 'Updated', value: 'updated' },
      ],
      type: FilterTypes.Picker,
    },
    status: {
      value: 'any',
      label: 'Status',
      options: [
        { label: 'Any', value: 'any' },
        { label: 'Ongoing', value: 'on-going' },
        { label: 'Completed', value: 'completed' },
      ],
      type: FilterTypes.Picker,
    },
    genre: {
      value: '',
      label: 'Genre',
      options: [
        { label: 'None', value: '' },
        { label: 'Action', value: '1' },
        { label: 'Adult', value: '2' },
        { label: 'Adventure', value: '3' },
        { label: 'Comedy', value: '4' },
        { label: 'Drama', value: '5' },
        { label: 'Ecchi', value: '6' },
        { label: 'Fantasy', value: '7' },
        { label: 'Gender Bender', value: '8' },
        { label: 'Harem', value: '9' },
        { label: 'Historical', value: '10' },
        { label: 'Horror', value: '11' },
        { label: 'Josei', value: '12' },
        { label: 'Martial Arts', value: '13' },
        { label: 'Mature', value: '14' },
        { label: 'Mecha', value: '15' },
        { label: 'Mystery', value: '16' },
        { label: 'Psychological', value: '17' },
        { label: 'Romance', value: '18' },
        { label: 'School Life', value: '19' },
        { label: 'Sci-fi', value: '20' },
        { label: 'Seinen', value: '21' },
        { label: 'Shoujo', value: '22' },
        { label: 'Shoujo Ai', value: '23' },
        { label: 'Shounen', value: '24' },
        { label: 'Shounen Ai', value: '25' },
        { label: 'Slice of Life', value: '26' },
        { label: 'Smut', value: '27' },
        { label: 'Sports', value: '28' },
        { label: 'Supernatural', value: '29' },
        { label: 'Tragedy', value: '30' },
        { label: 'Wuxia', value: '31' },
        { label: 'Xianxia', value: '32' },
        { label: 'Xuanhuan', value: '33' },
        { label: 'Yaoi', value: '34' },
        { label: 'Yuri', value: '35' },
      ],
      type: FilterTypes.Picker,
    },
    staff: {
      value: '',
      label: 'Staff',
      options: [
        { label: 'None', value: '' },
        { label: 'KopkeG', value: 'KopkeG' },
        { label: 'neverlandadmin', value: 'neverlandadmin' },
        { label: 'marctempest', value: 'marctempest' },
        { label: 'Lazybones', value: 'Lazybones' },
        { label: 'Hellboy', value: 'Hellboy' },
        { label: 'xlordfifth', value: 'xlordfifth' },
        { label: 'AkazaTL', value: 'AkazaTL' },
        { label: 'Fenrirtl', value: 'Fenrirtl' },
        { label: 'ilcoolaid', value: 'ilcoolaid' },
        { label: 'Creator', value: 'Creator' },
        { label: 'aRaion', value: 'aRaion' },
        { label: 'MaeUwU', value: 'MaeUwU' },
        { label: 'JolyneJoestar', value: 'JolyneJoestar' },
        { label: 'Myssoferia', value: 'Myssoferia' },
        { label: 'iniznet', value: 'iniznet' },
        { label: 'Elisia', value: 'Elisia' },
        { label: 'Kayiwas', value: 'Kayiwas' },
        { label: 'Ruminas', value: 'Ruminas' },
        { label: 'KyraSan', value: 'KyraSan' },
        { label: 'SkullAngel', value: 'SkullAngel' },
        { label: 'Divinity', value: 'Divinity' },
        { label: 'Sam1892', value: 'Sam1892' },
        { label: 'NolepGuy', value: 'NolepGuy' },
      ],
      type: FilterTypes.Picker,
    },
  } satisfies Filters;
}

export default new NovelFull();
