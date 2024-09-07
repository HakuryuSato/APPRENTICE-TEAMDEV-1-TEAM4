import { renderShelf } from "./renderShelf.mjs";
import { addEventListener } from "./addEventListener.mjs";
import { timerManagement } from "./timerManagement.mjs";
import { addEventListener_ijin } from "./addEventListener_ijin.mjs";
import { setTotalStudyTime } from "./setTotalStudyTime.mjs";

// イベントリスナーを追加
addEventListener();
addEventListener_ijin();

// 本棚を描画
renderShelf();

// 時間管理用
timerManagement();

// 合計時間の描画
setTotalStudyTime();
