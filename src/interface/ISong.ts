export default interface ISong {
  id: string | number;
  catname: string;
  newflag?: string | number;
  title: string;
  reading?: string;
  artist?: string;
  lev_bas: string | number;
  lev_adv: string | number;
  lev_exp: string | number;
  lev_mas: string | number;
  lev_ult: string | number | "";
  we_kanji?: string | number | "";
  we_star?: string | number | "";
  image: string | undefined;
  cn?: boolean;
}
