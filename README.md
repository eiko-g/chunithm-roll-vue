# 中二节奏 New!! 抽歌网页

有需求就会有这个捏。

[点击试用](https://roll.maimoe.in/chunithm/)

## 歌曲封面

还是老样子，有需要的请去 `public/assets/img/cover/readme.md` 里面看相关说明。

## 已知问题

部分 ~~宴~~ World\'s End 曲目跟官方的对不上，估计有出入。

## 开发相关

如果没有装 `pnpm` 的话就先 `npm install -g pnpm`，速度比用 `npm` 要快。

推荐开发工具：[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=vue.volar) （记得禁用 Vetur）+ [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=vue.vscode-typescript-vue-plugin)，装完之后要开 [Takeover mode](https://cn.vuejs.org/guide/typescript/overview.html#volar-takeover-mode)。

默认路径为 `roll.web/chunithm`，如果需要部署在其他目录的请去 `vite.config.ts` 修改或注释。

安装：

```sh
pnpm install
```

开发：

```sh
pnpm dev
```

构建：

```sh
pnpm build
```

语法检查：

```sh
pnpm lint
```

## 后续计划

- [ ] 多打中二

## 资料来源

- [Chunithm Offcial](https://chunithm.sega.jp/music/)
- [官方数据.json（日版）](https://chunithm.sega.jp/storage/json/music.json)
- [Chunithm Gamerch wiki（日文/搬迁中）](https://chunithm.gamerch.com/)
- [Chunithm Wikiwiki（日文/建设中）](https://wikiwiki.jp/chunithmwiki/)

## LICENSE

代码部分为 WTFPL，其他图片素材什么的为原作者所有