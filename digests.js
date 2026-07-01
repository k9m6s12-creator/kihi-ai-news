// 毎朝のAIニュース・ダイジェストの蓄積データ。
// /news-digest スキルが、ここに新しい1日分を「先頭」に追記していく。
// 形式: { date, pick, summary[], topics[{title, why, idea, tag}], small[], sources[{title, url}] }
// 重要: 文字列の中で半角ダブルクォート(")は使わないこと（JSが壊れる）。日本語の引用・強調は「」を使う。
window.DIGESTS = [
  {
    date: "2026-07-02",
    pick: "Claude Fable 5 が7/1に全世界解禁——19日間の停止を経て安全対策強化版として復帰。Claude.ai・Claude Code・Coworkで全ユーザーが利用可能に（7/7まで50%制限）。",
    summary: [
      "「Claude Fable 5」が7/1より全世界で利用再開。輸出規制解除後にサイバーセキュリティ対策を強化した改訂版として提供。7/7まで利用量50%制限、以後はクレジット制に移行予定。",
      "Claude Codeが大型アップデート：トークン使用量が約25%削減、サンドボックス認証情報ブロック・組織モデル制限など企業向け機能も追加。",
      "Claudeの世界市場シェアが9.2%に到達（前年比+855%）。ChatGPTの53.9%、Geminiの27.9%と並ぶ3強構図が確立。"
    ],
    topics: [
      { title: "🔁続報：Claude Fable 5 が7/1に全世界解禁——安全対策強化版として復帰", why: "19日間の停止後、サイバーセキュリティタスクへの対策を強化して帰還。AWS・Google Cloud・Microsoft Foundry経由は順次再開。7/7以降はクレジット制に移行予定。", idea: "「止まったAI」が戻ってきた日——Fable 5停止事件から学ぶAI依存のリスク", tag: "海外" },
      { title: "Claude Codeが大型アップデート——トークン25%削減・認証情報保護など", why: "コストとセキュリティを同時改善。org単位のモデル制限・フルスクリーンマウス対応など企業導入を後押しする機能が充実。", idea: "Claude Codeをもっと安く・安全に使うための最新アップデート全解説", tag: "海外" },
      { title: "AnthropicがAWS・Google Cloud向けClaudeアプリゲートウェイを提供開始", why: "企業向けにSSO・ポリシー管理・コスト追跡・支出上限を一元管理するセルフホスト型コントロールプレーン。Claude Codeの法人展開が加速する可能性。", idea: "企業がClaude Codeを安心して使えるようになる仕組みとは", tag: "海外" },
      { title: "Claude世界シェア9.2%・前年比+855%——ChatGPTとGeminiとの3強構図が確立", why: "GPT依存から複数AI選択の時代へ移行。エージェント用途を中心にClaudeの存在感が急拡大。", idea: "ChatGPT一択から3強時代へ——どのAIを選ぶか迷ったときの判断軸", tag: "市場" },
      { title: "（国内）PwC調査：日本のAI変革は「生存条件」——6カ国比較で課題浮き彫り", why: "日本企業は導入率・活用深度ともに他国に遅れ。「試している」から「本格運用」への転換が急務と指摘。", idea: "「生存条件」になったAI——日本企業がまだ遅れている本当の理由", tag: "国内" }
    ],
    small: [
      "Fable 5のAWS・Google Cloud・Microsoft Foundry経由アクセスは現在も順次再開中。",
      "Fable 5は7/7以降、5時間レート制限の代わりに使用量クレジット制に移行予定。"
    ],
    sources: [
      { title: "Claude Fable 5 is making a dramatic return (9to5Google)", url: "https://9to5google.com/2026/07/01/anthropic-fable-5-returns-to-claude/" },
      { title: "Anthropic brings back Claude Fable 5 globally (Digital Trends)", url: "https://www.digitaltrends.com/computing/youll-be-able-to-use-claude-fable-5-again-starting-july-1/" },
      { title: "Claude Code Updates - July 2026 (Releasebot)", url: "https://releasebot.io/updates/anthropic/claude-code" },
      { title: "Top Generative AI Chatbots by Market Share July 2026 (Momentic)", url: "https://momenticmarketing.com/blog/top-ai-chatbots" },
      { title: "生成AIに関する実態調査2026 春 6カ国比較 (PwC Japan)", url: "https://www.pwc.com/jp/ja/knowledge/thoughtleadership/generative-ai-survey2026.html" }
    ]
  },
  {
    date: "2026-07-01",
    pick: "Claude Sonnet 5 が6/30にリリース——Opusに迫る性能をSonnet価格で提供。Free/Proの標準モデルが刷新され、エージェント用途でのコスパが大きく改善。",
    summary: [
      "AnthropicがClaude Sonnet 5を6/30にリリース。性能はOpus 4.8に匹敵しながら大幅なコスト低減を実現。Free・Proプランの標準モデルに採用。",
      "同日、科学者向けAIワークベンチ「Claude Science」もベータ公開。最大50プロジェクトに1件最大3万ドルのクレジード提供、申請締切は7/15。",
      "NTT DATAが消費財メーカー向けAIエージェントサービスを7月から世界展開。製品企画の初期段階を数分で自動化。"
    ],
    topics: [
      { title: "Claude Sonnet 5 リリース（6/30）——Opus級の性能をSonnet価格で", why: "Free/Proの標準モデルが刷新。推論・ツール使用・コーディングが全面強化。エージェント用途でのコスト障壁が大幅に下がる。", idea: "「安くて賢い」が来た——Sonnet 5をどう使い倒すか", tag: "海外" },
      { title: "Claude Science ベータ公開——研究者向け統合AIワークベンチ", why: "ゲノミクス・プロテオミクスなど60以上のツールを統合。再現可能な成果物生成と自動引用検証が特徴。申請締切7/15。", idea: "AIが研究室に入る日——科学×生成AIの最前線", tag: "海外" },
      { title: "🔁続報：Fable 5 / Mythos 5 規制一部解除（6/26）", why: "米商務省がMythos 5を100以上の重要インフラ組織向けに再開。Fable 5は引き続き全ユーザー向けオフライン。規制とAI開発の緊張が続く。", idea: "政府がAIを止める日——輸出管理とAIガバナンスの行方", tag: "海外" },
      { title: "Anthropic、極秘IPO申請から1ヶ月——10月ナスダック上場を目指す", why: "評価額9,650億ドル（約150兆円）。年間売上は$30B（4月時点）。OpenAIとのIPO競争が本格化。", idea: "課金しているAIが「150兆円企業」になる話", tag: "市場" },
      { title: "（国内）NTT DATA、消費財メーカー向けAIエージェントを7月から世界展開", why: "製品企画の初期段階（アイデア〜社内承認）を数分に短縮。日本発のAIエージェントが国際市場へ。", idea: "日本発AIエージェントが世界へ——NTTデータの本気", tag: "国内" }
    ],
    small: [
      "Claude Sonnet 5 の期間限定価格：入力$2/MTok、出力$10/MTok（〜2026年8月31日）。",
      "Claude が Microsoft Foundry on Azure で一般公開——AzureのID・課金・ガバナンス管理と統合。"
    ],
    sources: [
      { title: "Introducing Claude Sonnet 5 (Anthropic)", url: "https://www.anthropic.com/news/claude-sonnet-5" },
      { title: "Anthropic launches Claude Sonnet 5 as a cheaper way to run agents (TechCrunch)", url: "https://techcrunch.com/2026/06/30/anthropic-launches-claude-sonnet-5-as-a-cheaper-way-to-run-agents/" },
      { title: "Claude Science, an AI workbench for scientists (Anthropic)", url: "https://www.anthropic.com/news/claude-science-ai-workbench" },
      { title: "GPT-5.6 and Claude Fable 5: Why the Newest AI Models Aren't Available to Everyone (innFactory)", url: "https://innfactory.ai/en/blog/gpt-5-6-fable-5-government-access-restrictions/" },
      { title: "Anthropic's IPO sets up first big test of AI boom valuations (CNBC)", url: "https://www.cnbc.com/2026/06/05/tech-download-anthropic-ipo-ai-valuations.html" },
      { title: "NTT DATA launches AI agent service for consumer goods companies (NTT DATA)", url: "https://www.nttdata.com/global/en/news/press-release/2026/june/062200" }
    ]
  },
  {
    date: "2026-06-30",
    pick: "カリフォルニア州がAnthropicと正式提携（6/29）— 州全機関・市区町村にClaudeを50%割引で提供開始。政府スケールのAI本格採用が現実に。",
    summary: [
      "カリフォルニア州がAnthropicとClaudeの全州導入契約を締結。50%割引＋無償トレーニング付きで全機関・地方自治体に展開。DMV・医療局など複数機関がすでに実務活用中。",
      "Microsoft、6/30期限でClaude Codeライセンス廃止→GitHub Copilotへ移行。UberはAI予算を4ヶ月で使い果たすなど、トークン課金型AIのコスト管理が企業の急務に。",
      "OpenAIが次世代モデル「GPT-5.6（Sol）」をプレビュー公開。トランプ政権の要請で一般公開が延期という異例の事態も。"
    ],
    topics: [
      { title: "カリフォルニア州、Anthropicと提携——Claudeを全州機関に50%割引で展開", why: "知事Newsom発表。DMV・医療局など複数機関がすでに実務活用中。政府スケールの本格採用が先行事例に。", idea: "自治体がAIを使う日——行政×生成AIの最前線", tag: "海外" },
      { title: "MicrosoftがClaude Codeライセンスを6/30期限で廃止、GitHub Copilotへ移行", why: "Uberは年間AI予算を4ヶ月で消化（月額$500〜$2,000／人）。トークン課金型の「コスト爆発」問題が表面化。", idea: "AI使いすぎ問題——企業はどうコストを管理するのか", tag: "海外" },
      { title: "OpenAI「GPT-5.6（Sol）」プレビュー、トランプ政権の要請で一般公開延期", why: "政府機関の事前審査を経ることが条件に。AI規制と政府の関与が米国でも現実化。", idea: "政府がAIリリースを止める日——規制と民主主義の境目", tag: "海外" },
      { title: "Google、Gemini画像生成を米国の一般ユーザーに無料公開", why: "最上位クラスのパーソナライズ画像生成が「無料」に。有料AIサービスとの差別化競争が激化。", idea: "AI画像生成の「無料化」で何が変わる？", tag: "海外" },
      { title: "（国内）製造業AI実装フォーラム2026開催、国産生成AIの本番活用が加速", why: "試験導入から本番運用へ。製造業・法務・バックオフィスと実装領域が広がる。", idea: "「現場で使えるAI」の条件——製造業が教えてくれること", tag: "国内" }
    ],
    small: [
      "GPT-4.5がChatGPTから予告通り廃止。o3も2026年8月26日廃止予定。",
      "Claude Opus 4.8の「dynamic workflows」、Super-Agentベンチマークで全ケース完走——業界唯一。"
    ],
    sources: [
      { title: "Governor Newsom announces Anthropic partnership (gov.ca.gov)", url: "https://www.gov.ca.gov/2026/06/29/governor-newsom-announces-a-first-of-its-kind-partnership-providing-anthropic-tools-to-state-agencies-and-improving-services-for-californians/" },
      { title: "California gives state agencies access to Claude at half price (The Next Web)", url: "https://thenextweb.com/news/anthropic-california-newsom-claude-half-price-government" },
      { title: "Microsoft dropping Claude Code by June 30 (Cybernews)", url: "https://cybernews.com/ai-news/microsoft-claude-code-burn-yearly-ai-budget/" },
      { title: "2026-06-29 今日のAIニュース総まとめ (bizfreak.co.jp)", url: "https://bizfreak.co.jp/blog/kc2zff-y_6" },
      { title: "Introducing Claude Opus 4.8 (Anthropic)", url: "https://www.anthropic.com/news/claude-opus-4-8" }
    ]
  },
  {
    date: "2026-06-24",
    pick: "（テーマ:教育）文科省が学校の生成AI活用に本腰 — 実証予算を前年比4倍の約8億円に。教育現場のAI導入が試行から本格フェーズへ。",
    summary: [
      "文科省、生成AI活用の実証事業予算を前年比4倍の総額約8億円に拡大。",
      "2026年度の生成AIパイロット校は149自治体・延べ478校規模（教育利用/校務/教材実証の3区分）。",
      "焦点は「認知的オフロード」の回避——AIを近道にせず、思考プロセスを残す学びへ。"
    ],
    topics: [
      { title: "文科省、生成AI実証予算を前年比4倍（約8億円）", why: "国が本腰。学校現場のAI導入が試行から本格フェーズへ。", idea: "「AIで宿題」は是か非か——文科省の本気から考える", tag: "国内" },
      { title: "生成AIパイロット校が478校規模に拡大", why: "教育利用・校務・教材の3区分で実践事例を量産する段階。", idea: "先生の校務をAIが助ける——いちばん現実的なAI活用", tag: "国内" },
      { title: "ガイドラインVer.2.0で「場面別チェック」を整理", why: "使ってよい/慎重にすべき場面が具体化。個人の自己ルールづくりの参考に。", idea: "学校のAIルールに学ぶ、自分用ガイドラインの作り方", tag: "国内" },
      { title: "焦点は「認知的オフロード」の回避", why: "AIを近道にすると学びが空洞化。思考を残す使い方が問われる。", idea: "AIに任せて「考えなくなる」をどう防ぐか", tag: "論点" }
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
    pick: "Microsoft「Copilot Cowork」一般提供開始 — オフィス向けの「AI同僚」が正式版に。非エンジニアの日常業務にエージェントが入り込む象徴的な動き。",
    summary: [
      "Microsoft「Copilot Cowork」一般提供、Google「Gemini 2.5 Pro Deep Think」発表。大手のエージェント製品が出そろう。",
      "Gartner予測：AIエージェント向けソフト支出は2026年に約2065億ドル（前年比+139%）。",
      "国内は導入率55.2%だが多くは試験段階、社内ルール整備は遅れ（正式ルールなし31%）。"
    ],
    topics: [
      { title: "Microsoft「Copilot Cowork」一般提供開始", why: "非エンジニアが毎日触るOfficeにエージェントが標準化。「AIに任せる」が普通に。", idea: "「AI同僚」が来た——普段の仕事はどう変わる？", tag: "海外" },
      { title: "Google「Gemini 2.5 Pro Deep Think」発表（6/22）", why: "Claude一強でなく、各社の最上位がぶつかる競争期に。", idea: "使い分けの時代——複数AIをどう選ぶか", tag: "海外" },
      { title: "AIエージェント市場、2026年に約2065億ドルへ（Gartner）", why: "前年比+139%。流行でなく本格投資フェーズ。", idea: "数字で見るAIエージェント——なぜ今みんな本気なのか", tag: "市場" },
      { title: "（国内）日本企業の生成AI導入55.2%、本格運用はこれから", why: "多くは試験導入どまり。NTT tsuzumi/NEC cotomiなど日本語特化も進展。", idea: "日本のAI活用は「試しただけ」が半分——その先へ", tag: "国内" },
      { title: "（国内）生成AIのガバナンス整備が遅れ気味", why: "正式な社内ルールなし31%。便利さ先行でルールが追いつかない。", idea: "会社にルールがないなら、自分のAIルールを作ろう", tag: "国内" },
      { title: "GitHub「Agent Finder」公開（6/17）", why: "エージェントが増え「選ぶ・見極める」段階へ。", idea: "AIエージェントも「素性確認」の時代へ", tag: "海外" }
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
    pick: "Claudeの「エージェント定期実行」が公開ベータに — 自前のスケジューラ不要で「毎朝AIに働かせる」が現実に。",
    summary: [
      "Claude Code基盤が大型進化：定期実行やマルチエージェント連携が公開ベータ。",
      "GoogleからNoam Shazeer（→OpenAI）・John Jumper（→Anthropic）が相次ぎ移籍。",
      "Anthropicが評価額でOpenAIを上回り、極秘IPO申請の報道。"
    ],
    topics: [
      { title: "Claudeの「エージェント定期実行」公開ベータ", why: "非エンジニアでも「毎朝AIに働かせる」が現実に。この連載の追い風。", idea: "スケジューラを作らずにAIを毎朝働かせる時代", tag: "海外" },
      { title: "Claude Managed Agents（マルチエージェント連携ほか）", why: "「一人で全部」から「AIチームを束ねる」へ。", idea: "一人でAIチームを持つ——マルチエージェントに触れてみた", tag: "海外" },
      { title: "GoogleからAIの大物が相次ぎ流出", why: "AIの主役交代が人材面でも進行。", idea: "AIの実力は「誰がいるか」で決まる", tag: "海外" },
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
