// 毎朝のAIニュース・ダイジェストの蓄積データ。
// /news-digest スキルが、ここに新しい1日分を「先頭」に追記していく。
// 形式: { date, pick, summary[], topics[{title, why, idea, tag}], small[], sources[{title, url}] }
window.DIGESTS = [
  {
    date: "2026-06-24",
    pick: "（テーマ:教育）文科省が学校の生成AI活用に本腰 — 実証予算を前年比4倍の約8億円に。教育現場のAI導入が試行から本格フェーズへ。",
    summary: [
      "文科省、生成AI活用の実証事業予算を前年比4倍の総額約8億円に拡大。",
      "2026年度の生成AIパイロット校は149自治体・延べ478校規模（教育利用/校務/教材実証の3区分）。",
      "焦点は“認知的オフロード”の回避——AIを近道にせず、思考プロセスを残す学びへ。"
    ],
    topics: [
      { title: "文科省、生成AI実証予算を前年比4倍（約8億円）", why: "国が本腰。学校現場のAI導入が試行から本格フェーズへ。", idea: "“AIで宿題”は是か非か——文科省の本気から考える", tag: "国内" },
      { title: "生成AIパイロット校が478校規模に拡大", why: "教育利用・校務・教材の3区分で実践事例を量産する段階。", idea: "先生の校務をAIが助ける——いちばん現実的なAI活用", tag: "国内" },
      { title: "ガイドラインVer.2.0で“場面別チェック”を整理", why: "使ってよい/慎重にすべき場面が具体化。個人の自己ルールづくりの参考に。", idea: "学校のAIルールに学ぶ、自分用ガイドラインの作り方", tag: "国内" },
      { title: "焦点は“認知的オフロード”の回避", why: "AIを近道にすると学びが空洞化。思考を残す使い方が問われる。", idea: "AIに任せて“考えなくなる”をどう防ぐか", tag: "論点" }
    ],
    small: [
      "『教育現場のためのAI導入＆活用ガイド 2026』が教育委員会へ無償提供。"
    ],
    sources: [
      { title: "学校教育におけるAI活用 これまでの取組（文科省・PDF）", url: "https://www.mext.go.jp/content/20260430-kyoikushokuin-000049466_1-1.pdf" },
      { title: "文科省が描く「学校AI活用」最新動向マップ（エデュテクノロジー）", url: "https://www.edutechnology.co.jp/post/ai-trends2026" },
      { title: "初等中等教育 生成AI利活用ガイドライン Ver.2.0（文科省・PDF）", url: "https://www.mext.go.jp/content/20241226-mxt_shuukyo02-000030823_001.pdf" }
    ]
  },
  {
    date: "2026-06-24",
    pick: "Microsoft「Copilot Cowork」一般提供開始 — オフィス向けの“AI同僚”が正式版に。非エンジニアの日常業務にエージェントが入り込む象徴的な動き。",
    summary: [
      "Microsoft「Copilot Cowork」一般提供、Google「Gemini 2.5 Pro Deep Think」発表。大手のエージェント製品が出そろう。",
      "Gartner予測：AIエージェント向けソフト支出は2026年に約2065億ドル（前年比+139%）。",
      "国内は導入率55.2%だが多くは試験段階、社内ルール整備は遅れ（正式ルールなし31%）。"
    ],
    topics: [
      { title: "Microsoft「Copilot Cowork」一般提供開始", why: "非エンジニアが毎日触るOfficeにエージェントが標準化。「AIに任せる」が普通に。", idea: "“AI同僚”が来た——普段の仕事はどう変わる？", tag: "海外" },
      { title: "Google「Gemini 2.5 Pro Deep Think」発表（6/22）", why: "Claude一強でなく、各社の最上位がぶつかる競争期に。", idea: "使い分けの時代——複数AIをどう選ぶか", tag: "海外" },
      { title: "AIエージェント市場、2026年に約2065億ドルへ（Gartner）", why: "前年比+139%。流行でなく本格投資フェーズ。", idea: "数字で見るAIエージェント——なぜ今みんな本気なのか", tag: "市場" },
      { title: "（国内）日本企業の生成AI導入55.2%、本格運用はこれから", why: "多くは試験導入どまり。NTT tsuzumi/NEC cotomiなど日本語特化も進展。", idea: "日本のAI活用は“試しただけ”が半分——その先へ", tag: "国内" },
      { title: "（国内）生成AIのガバナンス整備が遅れ気味", why: "正式な社内ルールなし31%。便利さ先行でルールが追いつかない。", idea: "会社にルールがないなら、自分のAIルールを作ろう", tag: "国内" },
      { title: "GitHub「Agent Finder」公開（6/17）", why: "エージェントが増え“選ぶ・見極める”段階へ。", idea: "AIエージェントも“素性確認”の時代へ", tag: "海外" }
    ],
    small: [
      "Fivetran調査：エージェントAIに「完全対応済み」は15%のみ。投資意欲と準備のギャップ。",
      "Microsoft Build 2026の主題は「エージェントがデモから本番へ」。"
    ],
    sources: [
      { title: "Kingy AI Launches of the Week (Jun 15-19, 2026)", url: "https://kingy.ai/ai-launch-radar/kingy-ai-launches-of-the-week-june-15-19-2026/" },
      { title: "Big 5 AI Vendor Roundup (Info-Tech)", url: "https://www.infotech.com/software-reviews/vendor-technology-notes/big-5-ai-vendor-roundup-week-of-june-15-2026" },
      { title: "日本企業の生成AI導入・ガバナンス（先端教育オンライン）", url: "https://www.sentankyo.jp/articles/33722e81-fa2c-426c-8dfc-fc6b611fea15" }
    ]
  },
  {
    date: "2026-06-24",
    pick: "Claudeの「エージェント定期実行」が公開ベータに — 自前のスケジューラ不要で“毎朝AIに働かせる”が現実に。",
    summary: [
      "Claude Code基盤が大型進化：定期実行やマルチエージェント連携が公開ベータ。",
      "GoogleからNoam Shazeer（→OpenAI）・John Jumper（→Anthropic）が相次ぎ移籍。",
      "Anthropicが評価額でOpenAIを上回り、極秘IPO申請の報道。"
    ],
    topics: [
      { title: "Claudeの「エージェント定期実行」公開ベータ", why: "非エンジニアでも“毎朝AIに働かせる”が現実に。この連載の追い風。", idea: "スケジューラを作らずにAIを毎朝働かせる時代", tag: "海外" },
      { title: "Claude Managed Agents（マルチエージェント連携ほか）", why: "「一人で全部」から「AIチームを束ねる」へ。", idea: "一人でAIチームを持つ——マルチエージェントに触れてみた", tag: "海外" },
      { title: "GoogleからAIの大物が相次ぎ流出", why: "AIの主役交代が人材面でも進行。", idea: "AIの実力は“誰がいるか”で決まる", tag: "海外" },
      { title: "Anthropic、評価額でOpenAIを上回り極秘IPO申請の報道", why: "使っているツールの会社が業界トップ級に。", idea: "自分が課金しているAIが、業界トップになっていた話", tag: "市場" }
    ],
    small: [
      "Fable 5 / Mythos 5 は6/12の米輸出管理指令で停止のまま、復旧未定（継続ウォッチ）。"
    ],
    sources: [
      { title: "生成AI主要アップデート総まとめ 2026年6月（Uravation）", url: "https://uravation.com/media/ai-major-updates-june-2026-anthropic-openai-google/" },
      { title: "GoogleからAIの大物の流出が相次ぐ（Ledge.ai）", url: "https://ledge.ai/articles/google_deepmind_openai_anthropic_ai_talent_move" },
      { title: "What's new - Claude Code Docs", url: "https://code.claude.com/docs/en/whats-new" }
    ]
  }
];
