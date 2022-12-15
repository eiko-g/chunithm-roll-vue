import type ISong from "@/interface/ISong";
interface ISongPreview {
  id: number | string;
  name: string;
  rank: string;
  lv: number | string;
}
export default function songFilter(
  inputSonglist: Array<ISong>,
  inputSetting: any
) {
  console.time("筛歌计时器");
  // inputSetting 暂时先 !!AnyScript
  console.log("筛歌输入的歌单", inputSonglist);
  console.log("筛歌输入的设置", inputSetting);
  let output: Array<ISongPreview> = [];

  let tempSongList = inputSonglist;

  // 如果难度是 all 则全部难度塞进去
  if (inputSetting.rank.includes("all")) {
    inputSetting.rank = ["lev_bas", "lev_adv", "lev_exp", "lev_mas", "lev_ult"];
  }

  // 先筛分类
  console.log("inputSetting.category[0]", inputSetting.category[0]);
  if (inputSetting.category[0] !== "all") {
    tempSongList = inputSonglist.filter((item: ISong) => {
      return inputSetting.category.includes(item.catname);
    });
  }

  console.log("筛了分类的歌单：", tempSongList);

  //#region 筛歌过程
  // 屌，这里先转为数字才行
  inputSetting.lvMin = Number.parseInt(inputSetting.lvMin as string);
  inputSetting.lvMax = Number.parseInt(inputSetting.lvMax as string);
  // 高低一致指的是在多选难度时，最低和最高的设置完全一致
  // 这时候就跟单难度的判断方法一样了
  let 高低一致 =
    inputSetting.lvMultiple === true &&
    inputSetting.lvMin === inputSetting.lvMax &&
    inputSetting.lvMinPlus === inputSetting.lvMaxPlus;
  console.log("是否高低一致：", 高低一致);

  // 如果是单一难度的话
  if (高低一致 === true || inputSetting.lvMultiple !== true) {
    console.log("现在抽的是单难度");

    let 抽歌等级: string = inputSetting.lvMin.toString();
    if (inputSetting.lvMinPlus === true) {
      抽歌等级 = 抽歌等级 + "+";
    }
    // 对临时歌单进行处理
    tempSongList.map((song) => {
      console.log("正在处理的歌：", song);

      inputSetting.rank.forEach((rank: string) => {
        // 可害行
        // console.log("aaa", song[rank as keyof typeof song]);
        if (song[rank as keyof typeof song] === 抽歌等级) {
          console.log(song.title, rank, song[rank as keyof typeof song]);
          let songPreview: ISongPreview = {
            id: song.id,
            name: song.title,
            rank,
            lv: song[rank as keyof typeof song] as number | string,
          };
          console.log("output 被塞了这个：", songPreview);
          output.push(songPreview);
        }
      });
    });
  } else if (inputSetting.lvMultiple === true && 高低一致 === false) {
    console.log("现在抽的是范围难度");

    // 如果是 范围难度 且 不是同样的设置
    if (inputSetting.lvMin === inputSetting.lvMax) {
      console.log("等级的数字部分相同");
      // 如果数字部分相同的话
      // 上面已经判断过带不带加号的情况了，这里就不用判断了
      let 抽歌等级 = inputSetting.lvMin;
      // 对临时歌单进行处理
      tempSongList.map((song) => {
        console.log("正在处理的歌：", song);
      });
    } else {
      // 如果数字部分不同的话
      console.log("等级的数字部分不同", inputSetting.lvMin, inputSetting.lvMax);
      console.log(
        "低等级带加号：",
        inputSetting.lvMinPlus,
        "高等级带加号：",
        inputSetting.lvMaxPlus
      );

      // 对临时歌单进行处理
      tempSongList.map((song) => {
        console.log("---分割线---");

        console.log("正在处理的歌：", song);
      });
    }
  }

  //#endregion

  console.timeEnd("筛歌计时器");
  return output;
}
