import { renderShelf } from "./renderShelf.mjs";
import { addEventListener } from "./addEventListener.mjs";
import { timerManagement } from "./timerManagement.mjs";

// イベントリスナーを追加
addEventListener();

// 本棚を描画
renderShelf();

timerManagement();
