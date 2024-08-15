<?php

/**
 * 通常$numは、定義されていないので静的解析ツールのエラーに引っかかる
 * 今回はコメントで本エラーを無視するように記載しているので、エラーが上がらない。
 */

/**
 * 導入部分
 * 「composer phpstan」のみで実行できるようにcomposer.jsonに追記
 *  phpstan.neonが設定ファイルになる
 */

function phpstanTest():void
{
    /** @phpstan-ignore variable.undefined */
	echo $num;
}

phpstanTest();
