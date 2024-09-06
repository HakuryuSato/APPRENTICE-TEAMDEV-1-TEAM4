import { renderShelf } from "./renderShelf.mjs";
import { addEventListener } from "./addEventListener.mjs";
import { timerManagement } from "./timerManagement.mjs";

// イベントリスナーを追加
addEventListener();


// 本棚を描画
renderShelf();

timerManagement();

// 一時的に偉人用イベントリスナー追加 前之園さんの作業完了後に統合
import { addEventListener_ijin } from "./addEventListener_ijin.mjs";
addEventListener_ijin();