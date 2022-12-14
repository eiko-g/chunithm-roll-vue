const { getDiffieHellman } = require("crypto");

(function () {
  let 歌单 = JSON.parse(localStorage.getItem("歌单"));
  if (!歌单) {
    throw new Error("请先存一次官方 JSON");
  }
  let 当前页面等级 = document
    .querySelector(".box01_title")
    .innerText.split(" ")[1];
  let 抓到的歌 = document.querySelectorAll(".musiclist_box");

  抓到的歌.forEach((item) => {
    let id = item.querySelector('input[name="idx"]').value,
      diff = item.querySelector('input[name="diff"]').value;

    let song = 歌单.find((item) => item.id == id);
    // 国服有的歌就做个标记，之后筛选用
    song.cn = 1;

    switch (diff) {
      case 0:
        song.lev_bas = 当前页面等级;
        break;
      case 1:
        song.lev_adv = 当前页面等级;
        break;
      case 2:
        song.lev_exp = 当前页面等级;
        break;
      case 3:
        song.lev_max = 当前页面等级;
        break;
      case 4:
        song.lev_ult = 当前页面等级;
        break;

      default:
        break;
    }
    console.log(song);
  });

  localStorage.setItem("歌单", JSON.stringify(歌单));

  // 跳转到下一个等级的页面
  let aa = document.querySelector('select[name="level"]');
  let bb = Number(aa.querySelector("option[selected]").value);
  aa.querySelector(`option[value="${bb + 1}"]`).selected = true;
  aa.parentNode.parentNode.submit();
})();

// World's End 部分
(function () {
  let 歌单 = JSON.parse(localStorage.getItem("歌单"));
  if (!歌单) {
    throw new Error("请先存一次官方 JSON");
  }

  let 抓到的歌 = document.querySelectorAll(".musiclist_box");
  抓到的歌.forEach((item) => {
    let id = item.parentNode.querySelector('input[name="idx"]').value;
    let song = 歌单.find((item) => item.id == id);
    // 国服有的歌就做个标记，之后筛选用
    console.log(song);
    if (song) {
      song.cn = true;
    } else {
      console.log("国服有但是日服歌单没有：", item);
    }
  });

  localStorage.setItem("歌单", JSON.stringify(歌单));
})();

// 处理分类
(function () {
  let 歌单 = JSON.parse(localStorage.getItem("歌单"));
  if (!歌单) {
    throw new Error("请先存一次官方 JSON");
  }

  歌单.forEach((item) => {
    switch (item.catname) {
      case "POPS & ANIME": {
        item.catname = "pops_anime";
        console.log("处理后", item);
        break;
      }
      case "東方Project": {
        item.catname = "toho";
        console.log("处理后", item);
        break;
      }
      case "VARIETY": {
        item.catname = "variety";
        console.log("处理后", item);
        break;
      }
      case "イロドリミドリ": {
        item.catname = "irodorimidori";
        console.log("处理后", item);
        break;
      }
      case "ゲキマイ": {
        item.catname = "geikimai";
        console.log("处理后", item);
        break;
      }
      case "ORIGINAL": {
        item.catname = "original";
        console.log("处理后", item);
        break;
      }
      case "niconico": {
        console.log("nico 分类不用处理", item);
      }
      default: {
        console.warn("这首歌没被处理", item);
      }
    }
  });

  localStorage.setItem("歌单", JSON.stringify(歌单));
})();
