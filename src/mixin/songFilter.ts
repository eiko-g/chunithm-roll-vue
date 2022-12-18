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

        inputSetting.rank.forEach((rank: string) => {
          // 可害行
          // console.log("aaa", song[rank as keyof typeof song]);
          if (
            Number.parseInt(song[rank as keyof typeof song] as string) ===
            抽歌等级
          ) {
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

        inputSetting.rank.forEach((rank: string) => {
          let songLv = song[rank as keyof typeof song];
          // console.log("当前判断的难度和等级", rank, songLv);

          // 麻鬼烦的等级判定
          // 先判断整数范围
          // 如果某首歌是 12+ 的话就在 11+ ~ 13 里面，这个肯定没问题，嗯🚩
          // 同理，11/11+ 和 13/13+ 目前也是在范围内，下面再判断边缘情况
          // 抽 11+ ~ 12 也是没问题的，11/12+ 的情况在下面会判断
          if (
            Number.parseInt(songLv as string) >= inputSetting.lvMin &&
            Number.parseInt(songLv as string) <= inputSetting.lvMax
          ) {
            console.log(
              songLv,
              "在等级的数字部分范围内",
              `${inputSetting.lvMin} ~ ${inputSetting.lvMax}`
            );
          } else {
            // 不在抽歌等级的数字范围内，跳过后面的判断
            return;
          }

          // 判断最低等级时带不带加号的情况
          if (
            Number.parseInt(songLv as string) === inputSetting.lvMin &&
            inputSetting.lvMinPlus === true &&
            (songLv as string)[(songLv as string).length - 1] !== "+"
          ) {
            // console.log("❌这个等级不符合要求", rank, songLv);
            return;
          }

          if (
            Number.parseInt(songLv as string) === inputSetting.lvMax &&
            inputSetting.lvMaxPlus !== true &&
            (songLv as string)[(songLv as string).length - 1] === "+"
          ) {
            // console.log("❌这个等级不符合要求", rank, songLv);
            return;
          }
          console.log("✅最后通过的数据", rank, songLv);
          let songPreview: ISongPreview = {
            id: song.id,
            name: song.title,
            rank,
            lv: song[rank as keyof typeof song] as number | string,
          };
          console.log("output 被塞了这个：", songPreview);
          output.push(songPreview);
        }); // end inputSetting.rank.forEach
      });
    }
  }

  //#endregion

  console.timeEnd("筛歌计时器");
  return output;
}
