# 中二等级数据简易爬虫
首先下个 QQ 浏览器，用自带的微信插件登录一下。然后访问一下 [https://tgk-wcaime.wahlap.com/wc_auth/oauth/authorize/chunithm](https://tgk-wcaime.wahlap.com/wc_auth/oauth/authorize/chunithm)，就会跳转到另一个网址，再迅速把这个网址贴到微信随便发一个地方点开，就可以在浏览器中访问到中二的个人资料页了。如果没进去的话那就重来一遍，一般是手慢了。

此教程来自 [鳕鱼堡的教程](https://www.diving-fish.com/maimaidx/prober_guide)，感谢鳕鱼堡大佬的分享。

## 使用方法
首先先搞一份 [官方歌单](https://chunithm.sega.jp/storage/json/music.json)，然后把里面的内容复制，再去中二网页里面开 F12，随便写个 `let o = `，然后粘贴（可能会卡一下）回车。

然后贴个 `localStorage.setItem('歌单', JSON.stringify(o))`，按回车。

然后打开歌曲记录界面，切换到按等级排序的页面，从 1 级开始。

其他的代码在 [crawler.js](crawler.js) 里面了，直接在控制台复制粘贴就可以跑了。跑完之后再粘贴一下这句：`document.body.innerHTML = localStorage.getItem('歌单')`，然后复制粘贴保存为 `json` 文件就行了

## 其他说明
部分 World\'s End 不知道为啥国服有但是日服歌单没有，很怪，到时候再处理好了。