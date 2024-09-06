import { renderShelf } from "./renderShelf.mjs";
import { addEventListener } from "./addEventListener.mjs";
import { timerManagement } from "./timerManagement.mjs";
import { addEventListener_ijin } from "./addEventListener_ijin.mjs";

// イベントリスナーを追加
addEventListener();
addEventListener_ijin();

// 本棚を描画
renderShelf();

// 時間管理用
timerManagement();
