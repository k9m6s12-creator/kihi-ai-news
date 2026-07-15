// 毎朝のAIニュース・ダイジェストの蓄積データ。
// /news-digest スキルが、ここに新しい1日分を「先頭」に追記していく。
// 形式: { date, pick, summary[], topics[{title, why, idea, tag}], small[], sources[{title, url}] }
// 重要: 文字列の中で半角ダブルクォート(")は使わないこと（JSが壊れる）。日本語の引用・強調は「」を使う。
window.DIGESTS = [
  {
    date: "2026-07-15",
    pick: "Google DeepMindのハサビスCEOが7/14、フロンティアAIモデルを事前審査する米国主導の独立「標準化機関」創設を提案——サム・アルトマン氏やサティア・ナデラ氏も支持を表明し、AI企業自身が政府に代わる審査の枠組みを求める動きが本格化した。同日、Anthropicは米国のK-12教員向けに「Claude for Teachers」を無償提供開始——教育現場をめぐる生成AI各社の争奪戦も加速している。",
    summary: [
      "Google DeepMindのデミス・ハサビスCEOが、FINRAのような独立の「フロンティアAI標準化機関」創設を提案。発売前最大30日間モデルを審査し、サイバー・生物兵器・「欺瞞」能力などを検証する枠組みで、アルトマン氏・ナデラ氏らも支持を表明した。",
      "Anthropicが7/14、米国の認定K-12教員向けに「Claude for Teachers」を無償提供開始。Claude Code・Coworkや、全50州の学習指導要領に対応した教育コネクタなどを1年間無料で使える。",
      "中国の「AI擬人化サービス管理弁法」が本日7/15に施行。ByteDance「豆包」・Alibaba「千問」がユーザー作成型AIキャラクター機能を終了し、Tencentも6月に同様機能を削除済み。"
    ],
    topics: [
      { title: "Google DeepMind、ハサビスCEOが米国主導の独立「フロンティアAI標準化機関」創設を提案", why: "発売前最大30日間、フロンティアラボが任意でモデルを機関に提出し、サイバー・生物・「欺瞞」能力などの危険性を審査する仕組みを提唱。当初は任意提出だが、有効性が確認されれば法制化も視野に入れる。政府主導ではなく業界資金による独立運営とし、チューリング賞受賞者ら有識者中心の理事会を想定。サム・アルトマン氏やサティア・ナデラ氏など他社トップも支持を表明しており、AI企業側から審査の枠組みを主導する動きとして注目される。", idea: "AI企業が自ら審査機関を求める——ハサビス提案から考える規制と自主基準の境界", tag: "海外" },
      { title: "Anthropic、米国K-12教員向け「Claude for Teachers」を無償提供開始", why: "認定を受けた米国の幼稚園から高校までの教員が、Claude Code・Coworkを含む有料級機能を1年間無料で利用可能に。全50州の学習指導要領に対応した「Learning Commons」コネクタや、学習科学者と共同開発した教育向けスキルも提供。生徒データはモデル学習に使わず、FERPA準拠のK-12向けデータ処理契約で保護するとしている。教育現場を巡るAI各社の争奪戦が一段と本格化。", idea: "学校に無料で入り込むAI——Claude for Teachersは授業をどう変えるか", tag: "海外" },
      { title: "🔁続報：中国「AI擬人化規制」が本日7/15施行——ByteDance・Alibabaがユーザー作成AIキャラ機能を終了", why: "4月公布の「人工知能擬人化互動服務管理暫行弁法」が本日施行。Alibaba「千問」は7/10から段階停止し15日までに関連サービスを終了、ByteDance「豆包」も本日で終了。Tencentは6月時点で「元宝」の同機能をすでに削除済み。14歳未満の本人確認や「AIと会話しています」旨の明示など、感情的な連続対話サービスへの包括規制が世界に先駆けて実運用段階に入った。", idea: "AIと友達になるを国が線引きする——中国の施行初日から読む次の論点", tag: "海外" },
      { title: "（国内）NEC、ソフトバンクと組みJoshin全事業所に顔認証勤怠システムを導入", why: "NECの顔認証クラウド「Bio-IDiom Services」とエッジ端末「UBio-N Face Pro」を使い、共有PCへのID・パスワード入力に代わってジェスチャー操作だけで出退勤を記録できる仕組みを全事業所で本格稼働。パスワード失念による対応の遅れや、共有PC利用の衛生面の懸念を解消する狙い。生成AIそのものではないが、AI技術が小売・接客の現場業務に定着している事例として注目。", idea: "ピースサインで出勤——現場に浸透するAI技術の地味だが確実な効果", tag: "国内" },
      { title: "AI半導体スタートアップ3社が高評価額での大型資金調達を推進——FuriosaAI・Nuvacore・d-Matrix", why: "韓国のFuriosaAIは評価額20億ドル超を前提に5億ドル規模、CPU設計のNuvacoreは2億ドル超、推論チップのd-Matrixは評価額50億ドル（従来20億ドルから倍増）を目指し数億ドル規模の調達を、それぞれ投資家と協議中とThe Informationが報道。NVIDIA一強に挑む半導体スタートアップへの資金集中が続いている。", idea: "NVIDIA一強に挑む半導体スタートアップたち——評価額の跳ね上がりから見る市場の期待", tag: "市場" }
    ],
    small: [
      "Anthropicは韓国Samsungとの独自AI推論チップ協議（2nmプロセス想定）を継続中と報じられている——月12.5億ドル規模とされる計算コストの圧縮が狙い。",
      "中国Z.aiの創業者Tang Jie氏が「AIはオープンであるべき」とする覚書を公表——海外向けAI利用制限の議論に対する中国側からの反論として注目された。"
    ],
    sources: [
      { title: "DeepMind CEO calls for an independent standards body to regulate frontier AI (TechCrunch)", url: "https://techcrunch.com/2026/07/14/deepmind-ceo-calls-for-an-independent-standards-body-to-regulate-frontier-ai/" },
      { title: "Google DeepMind chief Demis Hassabis calls for U.S. to spearhead AI standards body (CNBC)", url: "https://www.cnbc.com/2026/07/14/google-deepmind-demis-hassabis-us-led-ai-standards-body.html" },
      { title: "Anthropic launches Claude for Teachers in AI race to influence America's classrooms (Chalkbeat)", url: "https://www.chalkbeat.org/2026/07/14/anthropic-launches-claude-for-teachers-as-ai-companies-battle-for-classrooms/" },
      { title: "Anthropic Makes Claude Free for All US K-12 Teachers With Standards-Aligned Agentic AI (Tech Times)", url: "https://www.techtimes.com/articles/320533/20260715/anthropic-makes-claude-free-all-us-k-12-teachers-standards-aligned-agentic-ai.htm" },
      { title: "中国AI規制が7月15日施行 「豆包」「千問」が一部エージェント機能停止へ (Science Portal China)", url: "https://spap.jst.go.jp/china/experiences/law/law_2608.html" },
      { title: "「ピースサインで勤怠打刻」 Joshinが全事業所に導入した顔認証が従業員から絶賛のワケ (ITmedia ビジネスオンライン)", url: "https://www.itmedia.co.jp/business/articles/2607/15/news041.html" },
      { title: "NEC、Joshin全事業所に顔認証システム導入 ジェスチャーで勤怠打刻 (マイナビTECH+)", url: "https://news.mynavi.jp/techplus/article/20260713-4696414/" },
      { title: "AIチップ新興企業FuriosaAI、Nuvacore、d-Matrixが高評価額での大型資金調達を推進 (Investing.com)", url: "https://jp.investing.com/news/stock-market-news/article-93CH-1602970" }
    ]
  },
  {
    date: "2026-07-14",
    pick: "ソフトバンクグループの孫正義代表が7/14、「SoftBank World 2026」の基調講演で2040年の世界像を提示——AIエージェント100兆個が24時間稼働し「人間中心からAIエージェント中心の時代へ移行する」と宣言。世界のAIインフラ投資は2040年に年5兆ドル（約800兆円）規模に達すると予測した。同じ7/13〜14には、GMOインターネットグループの熊谷正寿代表が自らグループCAIO（AI変革最高責任者）に就任するなど、国内では経営トップ自らがAI変革の陣頭指揮を執る動きが相次いだ。",
    summary: [
      "孫正義氏がSoftBank World 2026の基調講演で、2040年に100兆個のAIエージェントが24時間稼働し人間中心からAIエージェント中心の時代へ移行すると予測。世界のAI関連売上は世界GDP3.7京円の20%・7000兆円規模、AIインフラ投資は年5兆ドル（約800兆円）に達すると説明した。",
      "GMOインターネットグループの熊谷正寿代表が7/13、自らグループCAIO（AI変革最高責任者）に就任すると発表。7/14には「グループAI推進本部」も新設し、「コーディングはAIの仕事」を前提に組織・業務の抜本的な見直しに着手する。",
      "台湾TSMCが2026年第2四半期に売上高1.27兆台湾ドル（約396億ドル、前年同期比36%増）の過去最高を記録。AI向け先端チップ需要がけん引し、3nmプロセスと先端パッケージングCoWoSは年末まで受注満了という。"
    ],
    topics: [
      { title: "孫正義氏、SoftBank World 2026で「2040年に100兆個のAIエージェントが稼働」と予測", why: "世界のAIインフラ投資が2040年に年5兆ドル（約800兆円）規模に達し、世界GDP3.7京円のうち20%・7000兆円がAI関連売上になると説明。ヒト型ロボットも10億台稼働するとし、「人間が生命体の頂点の時代は終わる」と述べた。データセンターの電源は当面天然ガス、将来的には核融合発電を有望視するとした。ソフトバンクグループ自身がAIインフラへの超長期投資を正当化する狙いも透ける発言。", idea: "「2040年に100兆個のAIエージェント」は本当か——孫正義予測を数字で検証する", tag: "国内" },
      { title: "（国内）GMOインターネットグループ、熊谷正寿代表が自らグループCAIO（AI変革最高責任者）に就任", why: "7/13付でグループ代表がAI変革の最高責任者を兼務すると発表。7/14には「グループAI推進本部」を新設し、副社長がAI変革担当・本部長に就任した。「コーディングはAIの仕事」という前提のもと、エンジニアを含む組織・業務体制の見直しに着手し、2027年11月末までに「日本一のハイパー自動化企業グループ」を目指すとしている。経営トップ自らがAI変革を陣頭指揮する事例として注目。", idea: "社長が自らCAIOになる——GMOの経営トップ主導AI変革から学ぶこと", tag: "国内" },
      { title: "Cursor、Claude CoworkやChatGPT Workに対抗する汎用AIエージェント「Sand」を開発中", why: "コーディング支援で知られるCursorが、メール対応や表計算整理、エンジニアリング作業まで担う汎用エージェント「Sand」を社内展開中と報じられた。開発用の計算資源はSpaceXAIからのリース。ただしCursorは2026年第3四半期に完了予定のSpaceXによる約600億ドル規模の買収を控えており、Sandが実際に一般公開されるかは不透明で、買収が製品ロードマップを書き換える可能性がある。", idea: "コーディングAIが何でも屋になる日——CursorのSandから見るエージェント統合の行方", tag: "海外" },
      { title: "TSMC、2026年第2四半期に売上高過去最高——AI向け先端チップ需要が牽引", why: "売上高は1.27兆台湾ドル（約396億ドル）で前年同期比36%増、自社ガイダンス上限も上回った。6月単月の売上高は前年比67.9%増で過去最高を記録。NVIDIA向けなどAI半導体需要が旺盛で、3nmプロセスと先端パッケージングCoWoSは年末まで受注が埋まっているという。正式な第2四半期決算は7/16に発表予定。", idea: "AI好況は半導体の数字にどう表れるか——TSMC決算から読む需要の実態", tag: "市場" },
      { title: "OpenAI、独立型ブラウザ「ChatGPT Atlas」を終了へ——8/9にアクセス停止", why: "2025年10月に鳴り物入りで登場したAtlasだが、9か月足らずで終了が決定。macOS版のみの提供でWindows・iOS・Android版は結局リリースされず、シェアが伸び悩んだとみられる。エージェント的なブラウジング機能はChatGPTデスクトップアプリとChrome拡張機能に再編し継続する。ブックマークや閲覧履歴、保存パスワードなどは自動移行されないため、ユーザーは8/9までに手動でのバックアップが必要。", idea: "鳴り物入りの新製品が9か月で終わる——ChatGPT Atlas終了から学ぶプロダクト撤退の教訓", tag: "海外" }
    ],
    small: [
      "Claude Codeはv2.1.209（7/14）で、バックグラウンドの「claude agents」セッション中に/modelなどのダイアログがブロックされる不具合を修正した。",
      "Fable 5の無償アクセス延長（7/19まで）は7/13付ですでに報告済みの続報で、7/14時点で新たな動きは確認できず。"
    ],
    sources: [
      { title: "数千兆のAI agentsが常時稼働する世界へ。孫正義 特別講演レポート (ソフトバンク ビジネスブログ)", url: "https://www.softbank.jp/business/content/blog/202507/sbw2025-softbank-son-main-keynote" },
      { title: "ソフトバンクG孫正義氏 世界のAIインフラ投資「40年に800兆円へ」 (日本経済新聞)", url: "https://www.nikkei.com/article/DGXZQOUC142BO0U6A710C2000000/" },
      { title: "GMOグループ、AI時代に「エンジニア含む組織体制見直し」 熊谷代表が「AI変革最高責任者」に (ITmedia NEWS)", url: "https://www.itmedia.co.jp/news/articles/2607/13/news093.html" },
      { title: "Cursor Prepares Workplace AI Agent to Challenge Claude Cowork and ChatGPT Work (PYMNTS)", url: "https://www.pymnts.com/news/artificial-intelligence/2026/cursor-prepares-workplace-ai-agent-to-challenge-claude-cowork-and-chatgpt-work/" },
      { title: "TSMC sales hit record on AI demand (Taipei Times)", url: "https://www.taipeitimes.com/News/biz/archives/2026/07/14/2003860683" },
      { title: "OpenAI is shutting down Atlas, but its AI browser ambitions are still growing (TechCrunch)", url: "https://techcrunch.com/2026/07/09/openai-is-shutting-down-atlas-but-its-ai-browser-ambitions-are-still-growing/" },
      { title: "Claude Code Updates by Anthropic - July 2026 (Releasebot)", url: "https://releasebot.io/updates/anthropic/claude-code" }
    ]
  },
  {
    date: "2026-07-13",
    pick: "Claude Fable 5の無償アクセスが7/19まで再延長——6/22の当初終了予定から数えて3度目の延期に。Anthropicは需要予測の難しさを理由に挙げるが、フロンティアAI企業がいまだ「使い放題」から抜け出せない現実が浮き彫りに。同日、インドのTCSは最大8,900人規模の「AI導入専門エンジニア」体制を発表——AIを『導入支援』で稼ぐ側に回る動きも本格化している。",
    summary: [
      "Claude Fable 5の無償アクセス（週次利用上限の50%まで無追加課金）とClaude Codeの週次利用上限50%増が、そろって7/19まで再延長。当初終了予定の6/22から3度目の延期となった。",
      "インドのTCSが、全従業員の1〜1.5%にあたる最大8,900人を「AI導入専門エンジニア」に転換する計画を発表。AI・サイバーセキュリティ分野での企業買収も検討中と表明した。",
      "韓国SKハイニックスが7/10にナスダック上場し265億ドルを調達——外国企業による米国上場として史上最大規模。テスラは日本国内の車両に対話型AI「Grok」を追加し、音声でのナビ操作に対応した。"
    ],
    topics: [
      { title: "🔁続報：Claude Fable 5、無償アクセスを7/19まで再延長——当初終了予定から3度目の延期", why: "Pro・Max・Team・一部Enterpriseで週次利用上限の50%まで無追加料金という措置が、6/22の当初終了予定から数えて3度目の延長となった。Claude Codeの週次利用上限50%増も同じく7/19まで延長。Anthropicは需要の予測が難しいことを理由に挙げているが、使用量クレジット制への完全移行がたびたび先送りされている状況が続く。", idea: "「延長また延長」のAI無料期間——ユーザーはどう向き合うべきか", tag: "海外" },
      { title: "TCS、最大8,900人規模の「AI導入専門エンジニア」体制へ——AI・サイバーセキュリティ企業の買収も検討", why: "インドの大手ITサービス企業TCSが、全従業員59万人超の1〜1.5%にあたる5,900〜8,900人を、顧客先でAI導入を支援する「フォワード・デプロイド・エンジニア」に転換する計画を発表。既存人材の再教育か外部採用かは未定だが、AIが受託開発の仕事を奪うのではなく新たな収益源になるとの見立てに基づく。ITアウトソーシング業界がAI時代にどう自己変革するかを示す事例。", idea: "ITアウトソーシング大手がAIで稼ぎ方を変える——TCSの「導入専門エンジニア」戦略から学ぶこと", tag: "海外" },
      { title: "SKハイニックス、ナスダック上場で265億ドル調達——外国企業として史上最大のADR", why: "7/10にナスダックへADR上場し、アリババの2014年上場（250億ドル）を超える外国企業として過去最大の資金調達に。上場初日は13%上昇。NVIDIAへHBM（広帯域メモリ）を供給する主要3社の一角として、AI半導体需要の高まりを背景にした投資家の強い需要が指摘されている。", idea: "AIブームが半導体株の上場を動かす——SKハイニックス上場から見る資金の流れ", tag: "市場" },
      { title: "（国内）テスラ車内AI「Grok」、日本でも展開開始——音声でナビ操作や情報検索", why: "Tesla Japanが7/10、対話型AI「Grok」を国内車両向けに提供開始したとX公式アカウントで発表。ソフトウェア2026.20以降かつ有料の「プレミアムコネクティビティ」契約が条件で、音声でのルート設定・場所検索・車両状態確認などに対応する（空調やメディア操作は非対応）。米国では2025年7月から搭載が始まっており、日本はそれに続く展開。", idea: "「話しかけて動かす」以前の一歩——車載AIが日本でまずできること・できないこと", tag: "国内" },
      { title: "（国内）浜松市、中小事業者向け「AIエージェント導入支援補助金」の二次募集を開始", why: "浜松市が、市内中小事業者等のAIエージェント導入費用（ライセンス・カスタマイズ・導入コンサルティング費等）を対象経費の2分の1以内・上限500万円で補助する制度の二次募集を開始。締切は7/31。地方自治体レベルでの中小企業AI導入支援が、具体的な予算措置として広がっている一例。", idea: "「補助金でAIを導入する」を検討する——浜松市の制度から見る中小企業支援の実態", tag: "国内" }
    ],
    small: [
      "国連は7/6〜7、ジュネーブで「AIガバナンスに関するグローバル対話」を開催。破局的リスクへの国際的な懸念を背景に、各国の規制アプローチのすり合わせが議題に上った。",
      "アクセンチュアは5月にAnthropicとの協業体制「アクセンチュア Anthropicビジネスグループ」の日本活動を本格始動しており、企業変革支援での連携が継続中。"
    ],
    sources: [
      { title: "Claude Fable 5 Free Access Extended Until July 19 (Dataconomy)", url: "https://dataconomy.com/2026/07/13/claude-fable-5-free-access-extended-july-19/" },
      { title: "Claude Code Increases Weekly Limits by 50% Through July 13 2026 (Pasquale Pillitteri)", url: "https://pasqualepillitteri.it/en/news/2494/claude-code-weekly-limits-50-percent-anti-codex-anthropic-2026" },
      { title: "TCS Plans Up to 8,900 AI Jobs as It Explores AI Acquisitions (Business Today)", url: "https://www.businesstoday.in/technology/news/story/tcs-plans-up-to-8900-ai-jobs-as-it-explores-ai-acquisitions-all-details-542504-2026-07-13" },
      { title: "TCS Plans Up to 8,900 Forward-Deployed AI Engineers (AI Weekly)", url: "https://aiweekly.co/alerts/tcs-plans-up-to-8900-ai-deployment-engineers-eyes-ma" },
      { title: "SK Hynix ADR Stock (SKHYV) Rises After $26.5 Billion US Listing (Bloomberg)", url: "https://www.bloomberg.com/news/articles/2026-07-10/sk-hynix-indicated-to-climb-17-after-26-5-billion-adr-offering" },
      { title: "SK Hynix rises 13% in Nasdaq debut. Chairman tells CNBC demand is enormous (CNBC)", url: "https://www.cnbc.com/2026/07/10/sk-hynix-skhy-stock-nasdaq.html" },
      { title: "テスラ車内で「Grok」と会話、日本でも展開へ (ITmedia NEWS)", url: "https://www.itmedia.co.jp/news/articles/2607/10/news157.html" },
      { title: "テスラ、日本でEVに対話型AI「Grok」 (日本経済新聞)", url: "https://www.nikkei.com/article/DGXZQOUC077EG0X00C26A7000000/" },
      { title: "浜松市中小事業者等AIエージェント導入支援事業費補助金の二次募集について (PR TIMES / 浜松市)", url: "https://prtimes.jp/main/html/rd/p/000000540.000049248.html" },
      { title: "Global push for AI governance amid warnings of catastrophic harm (UN News)", url: "https://news.un.org/en/story/2026/07/1167862" }
    ]
  },
  {
    date: "2026-07-12",
    pick: "AppleがOpenAIを商業秘密窃盗の疑いで提訴（7/10）——「あらゆる階層で組織的に窃盗が行われた」と主張し、退職した元Apple社員400人超の名を列挙。2024年のChatGPT連携という蜜月から一転、フロンティアAI企業同士の対立が法廷闘争に発展した象徴的な一日に。",
    summary: [
      "AppleがOpenAIを北カリフォルニア連邦地裁に提訴。ハードウェア責任者Tang Tan氏らが応募者に「実物の部品」持参を求めたなど、組織的な機密窃取を主張している。",
      "GoogleのGemini 3.5 Proは7/17に延期。既存の2.5 Proアーキテクチャを破棄し、200万トークンのコンテキスト窓を備えた完全刷新版として登場する見通し。",
      "Claude Fable 5のサブスク包含アクセスは本日7/12が最終日。7/13以降は入力$10・出力$50/百万トークンの使用量クレジット制へ完全移行する。"
    ],
    topics: [
      { title: "Apple、OpenAIを商業秘密窃盗で提訴——元社員400人超の名を列挙", why: "訴状では「技術スタッフからチーフ・ハードウェア・オフィサーまで、あらゆる階層で」機密窃取が行われたと主張。ハードウェア責任者Tang Tan氏（元Apple副社長）が応募者に実物のApple部品持参を求めたこと、退職者にセキュリティ回避方法を指南したことなどが具体的に列挙されている。2024年のChatGPT統合という蜜月からの急転換で、AI企業間の人材争奪戦が法廷闘争に発展した。", idea: "「AI企業の人材引き抜き」はどこまで許されるのか——Apple対OpenAI訴訟から考える", tag: "海外" },
      { title: "🔁続報：Gemini 3.5 Pro、7/17に延期——2.5 Proの土台を破棄し完全新規構築へ", why: "既存アーキテクチャの改良ではなく、ゼロからの再構築を選んだとされる。200万トークンのコンテキスト窓（現行フロンティア勢の2倍）と拡張推論モード「Deep Think」を搭載予定。DeepSeek V4の正式版公開と同日に重なる見通しで、複数社の主力モデルが7月中旬に集中する展開になっている。", idea: "「作り直す」という決断——Gemini延期から見るAI開発の意思決定", tag: "海外" },
      { title: "🔁続報：Claude Fable 5、本日7/12がサブスク包含アクセスの最終日", why: "Pro・Max・Team・一部Enterpriseで週次利用上限の50%まで無追加料金だった措置が本日で終了。7/13以降は入力$10・出力$50/百万トークンの使用量クレジットが必須になる。7/7に一度延長された経緯があり、Anthropicは容量確保後のサブスク復帰を目指すとしている。", idea: "無料期間が終わったAIとどう付き合うか——Fable 5クレジット制移行後の使い分け", tag: "海外" },
      { title: "SambaNova、$1B調達で評価額$11Bに——JPMorganChaseと推論インフラで提携", why: "General Atlantic主導のシリーズFで、BlackRock・Intel Capital・カタール投資庁なども参加。次世代チップSN50はSoftBankを最初の導入パートナーとして2026年後半に出荷予定。AI半導体スタートアップへの資金集中がさらに進んでいる。", idea: "NVIDIA一強ではない——AI半導体スタートアップの資金調達競争を追う", tag: "市場" },
      { title: "（国内）三菱自動車、東大発Highlandersと人型ロボット量産で基本合意（7/9）", why: "京都製作所京都工場を活用し、2027年に月1000台の製造体制を目指す。三菱自の量産設計・品質保証・機電統合制御の知見を投入し、自社工場での稼働データも蓄積する計画。2027年後半にはエンジン組み立てなど自社工場の一部業務への導入も検討している。自動車メーカーの製造ノウハウをロボット量産に転用する事例として注目。", idea: "車を作る技術でロボットを作る——三菱自動車の量産ノウハウ転用に学ぶ", tag: "国内" },
      { title: "（国内）企業の7割超が「シャドーAI」対策できず——支援サービスが相次ぎ登場", why: "ガートナージャパンの2026年6月調査で、シャドーAI（未承認の生成AI利用）への有効な対策を取れていない国内企業が7割超に上ると判明。IPA情報セキュリティ10大脅威2026でも3位にランクイン。GRCSが7/2に可視化・統制ツールを組み込んだ支援パッケージの提供を開始するなど、対策サービス市場が動き出している。", idea: "社員が勝手にAIを使う「シャドーAI」——禁止より「安全な選択」を用意する対策の考え方", tag: "国内" }
    ],
    small: [
      "Anthropicのデザインツール「Claude Design」はClaude Codeとの双方向連携とCanva／Adobeへの書き出しを強化済み——プロンプトからプロトタイプやスライドを生成できる。",
      "Gemini 3.5 ProのGA予定日（7/17）は報道ベースで、Google公式の確定発表はまだ（7/7時点のAPIページはgemini-3.5-flash／gemini-3.1-pro-previewの表記）。"
    ],
    sources: [
      { title: "Apple sues OpenAI alleging trade secret theft, says scheme was at every level (CNBC)", url: "https://www.cnbc.com/2026/07/10/apple-openai-lawsuit-trade-secrets.html" },
      { title: "Apple sues OpenAI over alleged trade secret theft (TechCrunch)", url: "https://techcrunch.com/2026/07/10/apple-sues-openai-over-alleged-trade-secret-theft/" },
      { title: "Google Delays Gemini 3.5 Pro Launch to July 17 for Full Architectural Rebuild (BigGo Finance)", url: "https://finance.biggo.com/news/6f0c6bb2-795f-4c57-9d09-6db691d7638a" },
      { title: "Fable 5 Plan Access Extended to July 12: What Changes (Digital Applied)", url: "https://www.digitalapplied.com/blog/anthropic-fable-5-access-extended-july-12-2026" },
      { title: "SambaNova draws $1B at $11B valuation in Series F first close (TechCrunch)", url: "https://techcrunch.com/2026/07/08/sambanova-draws-1b-at-11b-valuation-in-series-f-first-close/" },
      { title: "三菱自、東大発ベンチャーと人型ロボット開発で協業 追加出資へ (DG Lab Haus)", url: "https://media.dglab.com/2026/07/10-reuters-02/" },
      { title: "三菱自動車が「国産人型ロボ」量産へ 2027年に月1000台の製造体制 (ITmedia AI+)", url: "https://www.itmedia.co.jp/aiplus/article/2607/09/2000000177/" },
      { title: "企業の7割超がシャドーAI対策できず、放置で情報漏洩・法令違反のリスクも (日経クロステック)", url: "https://xtech.nikkei.com/atcl/nxt/column/18/00989/062200211/" },
      { title: "従業員向けシャドーAI対策トータル支援パッケージをリリース (PR TIMES / GRCS)", url: "https://prtimes.jp/main/html/rd/p/000000122.000035245.html" }
    ]
  },
  {
    date: "2026-07-11",
    pick: "この一週間で新モデルが出そろい、コーディングAIの勢力図が落ち着いてきた。エージェント型コーディングの指標SWE-Bench ProではClaude Fable 5が80.3%で首位を維持し、GPT-5.5やGemini 3.1 Proに20ポイント以上の差。一方でGoogleの次期Gemini 3.5 Proは遅延が続き、『安さ』か『長時間の粘り強さ』かで選ぶ時代が鮮明に。",
    summary: [
      "GPT-5.6・Grok 4.5・Muse Spark 1.1と新モデルが出そろい、性能マップが安定。エージェント型コーディングのSWE-Bench ProではClaude Fable 5が80.3%で首位、GPT-5.5は58.6%、Gemini 3.1 Proは54.2%と差がついた。",
      "Googleの次期Gemini 3.5 Proは公開の遅延が続く。トークン効率や長タスク推論の課題対応が理由とされ、先行2社との差が広がる展開に。",
      "国内では中小企業のAI導入が加速。Claude Proなど月3千円級で始められ、意思決定の速さで大企業を上回るという実務的な指摘が出ている。"
    ],
    topics: [
      { title: "Claude Fable 5、エージェント型コーディングSWE-Bench Proで80.3%と首位維持", why: "実際のバグ修正タスクを解かせる指標で、GPT-5.5（58.6%）やGemini 3.1 Pro（54.2%）に20ポイント以上の差。新モデルが出そろった後も、長時間の自律作業ではFable 5が抜けているという評価が定着しつつある。", idea: "ベンチマークの数字は何を測っているのか——SWE-Bench Proで分かるAIの実力", tag: "海外" },
      { title: "週明けに見えた『使い分けマップ』——安さのLuna/Grok/Muse、粘り強さのFable 5", why: "GPT-5.6のLunaやGrok 4.5、Muse Spark 1.1は低価格で日常用途向き。対してFable 5は$10/$50と高価だが長時間エージェントに強い。『とにかく安く』と『難しい作業を任せきる』で選ぶ基準が分かれてきた。", idea: "AIは『安い順』では選べない——用途で選ぶ価格性能マップの作り方", tag: "海外" },
      { title: "Google、次期Gemini 3.5 Proの公開遅延が続く", why: "トークン効率・コード性能・長タスク推論の課題対応が続いているとされる。OpenAI・Anthropicが週内に相次いで手を打つ中、先行2社との差が実感として広がる局面に。", idea: "『出せない』のもニュースになる——Gemini遅延から読むAI開発の難所", tag: "海外" },
      { title: "（国内）中小企業のAI導入が加速——月3千円級・意思決定の速さが武器", why: "大企業より稟議が短く、Claude Proなど月3千円程度から初期投資ほぼゼロで始められる点が追い風。派手な自社開発でなく、既製のAIを現場に載せる『実装の速さ』で中小が先行する構図が語られ始めた。", idea: "『大企業より中小が速い』は本当か——身の丈AI導入のリアル", tag: "国内" }
    ],
    small: [
      "Anthropicは一部プランで利用枠の倍増を8/5まで継続。フォーカス設定（休憩リマインド・作業インサイト）も拡充中。",
      "Fable 5はOpus級の上に位置する『Mythos級』モデルで、長時間の自律作業に特化した設計とされる。"
    ],
    sources: [
      { title: "SWE-bench Pro Leaderboard 2026 (CodingFleet)", url: "https://codingfleet.com/blog/swe-bench-pro-leaderboard-2026/" },
      { title: "Claude Fable 5 Benchmark vs Gemini, GPT and Grok (Eden AI)", url: "https://www.edenai.co/post/claude-fable-5-benchmark-vs-gemini-gpt-and-grok" },
      { title: "GPT-5.6 Sol Terra Luna vs Fable 5 — July 2026 (ExplainX)", url: "https://explainx.ai/blog/gpt-5-6-vs-claude-fable-5-comparison-2026" },
      { title: "2026年7月最新 生成AIトレンド完全ガイド (genai-ai.co.jp)", url: "https://genai-ai.co.jp/ai-kanri/blog/cc-generative-ai-trends/" },
      { title: "Claude Updates by Anthropic - July 2026 (Releasebot)", url: "https://releasebot.io/updates/anthropic/claude" }
    ]
  },
  {
    date: "2026-07-10",
    pick: "OpenAIがGPT-5.6を正式公開しChatGPT Workを投入した同じ日、Anthropicは全ユーザーのレート制限をリセットし、最上位モデルFable 5の無料提供を7/12まで延長、振り返り機能『reflect』も追加——フロンティアAI2社が同日に応酬する異例の一日に。",
    summary: [
      "OpenAIが7/9、GPT-5.6（Sol・Terra・Luna）を一般公開し、業務エージェント『ChatGPT Work』も同時始動。第三者ベンチマークではコーディング・エージェント性能でClaude Fable 5を上回る結果も報告された。",
      "Anthropicは同日、全ユーザーのレート制限をリセットしFable 5の無料期間を7/12まで延長、利用状況を振り返る新機能『reflect』も追加。GPT-5.6公開への対抗と見られている。",
      "Metaが初の有料AIモデル『Muse Spark 1.1』を公開しコーディング競争に参入。米イリノイ州は全米最も厳格な『AI安全対策法』に知事が署名した。"
    ],
    topics: [
      { title: "OpenAI、GPT-5.6を正式公開＋『ChatGPT Work』始動", why: "Sol・Terra・Lunaの3価格帯モデルが一般提供に。ChatGPT Workは接続済みアプリやファイルを横断し文書・表計算・資料を作成するエージェント。第三者機関Artificial Analysisの計測では、コーディングでSol・Terra双方がClaude Fable 5を上回ったと報告されている。", idea: "3段階価格のAIから何を選ぶか——GPT-5.6の使い分けガイド", tag: "海外" },
      { title: "Anthropic、GPT-5.6公開と同日に対抗——レート制限リセット・Fable5無料延長・新機能『reflect』", why: "全ユーザーの週次・5時間ごとの利用制限をリセットし、Fable 5の無料提供を7/12まで延長。あわせて過去1〜12ヶ月の利用傾向を振り返る『reflect』機能も追加。競合のOpenAI幹部が挑発的なコメントを寄せるなど、フロンティアAI2社の応酬が可視化された。", idea: "『使いすぎ』を振り返るAI機能——reflectで自分のAI依存度を見直す", tag: "海外" },
      { title: "Meta、初の有料AIモデル『Muse Spark 1.1』公開——コーディング競争に参入", why: "100万トークンの長文脈とマルチエージェント編成に対応した推論モデル。Meta Model APIで1MTokあたり入力$1.25・出力$4.25と、AnthropicやOpenAIの4分の1程度の価格を提示。Metaがこれまで無料提供してきたAIで初めて課金に踏み切った転換点。", idea: "Metaが『AIを無料で配る』のをやめた日——コーディングAI価格競争の行方", tag: "海外" },
      { title: "米イリノイ州、全米最も厳格な『AI安全対策法』に知事署名", why: "年商5億ドル超・大規模計算資源で学習したフロンティアAI企業に、破局的リスクへの対応計画の年次公表と第三者による独立監査を義務化。重大な安全上の事故は72時間以内に州へ報告する必要がある。施行は2028年1月からだが、OpenAI・Anthropic双方が法案を支持した点も注目。", idea: "『AIの安全性を国ではなく州が審査する』時代——イリノイ州法から考える日本への示唆", tag: "海外" },
      { title: "🔁続報：Grok 4.5、第三者ベンチマークで総合4位——独自のトークン効率性を主張", why: "Artificial AnalysisのIntelligence Indexで54点を獲得し、Claude Fable 5（1位）・GPT-5.5（2位）・Claude Opus 4.8（3位）に次ぐ4位。政治的バイアスを巡る論争も同時に浮上。高頻度エージェント用途でのコスト計算を変えるトークン効率性の主張が焦点に。", idea: "ベンチマーク4位のAIをどう評価するか——数字だけでは見えない使い勝手の話", tag: "海外" },
      { title: "（国内）SoftBank・NVIDIA支援『AI Boost Program』、国内スタートアップ5社が成果発表", why: "名古屋のSTATION AiでNVIDIAとソフトバンクが支援するアクセラレータープログラムのクロージングイベントを7/10に開催。GPU基盤の提供や技術支援を受けた国内スタートアップ5社が事業成果を発表し、大手との事業共創機会を作った。生成AIを活用したデザインの知財リスク低減サービスなども登場した。", idea: "GPUを借りて挑む国内AIスタートアップ——支援プログラムから見る育成の実像", tag: "国内" }
    ],
    small: [
      "Metaは自社設計のAIチップの製造を9月に開始予定で、2027年には計算能力を14ギガワット規模に引き上げる計画。",
      "Accenture EdgeとGoogle Cloudが、年商3億〜30億ドルの中堅企業向けにあらかじめ構築されたエージェントAI群の提供を開始。"
    ],
    sources: [
      { title: "Claude、利用制限を全リセット 競合GPT-5.6公開と同日 (ITmedia AI+)", url: "https://www.itmedia.co.jp/aiplus/article/2607/10/2000000179/" },
      { title: "Anthropic、Claudeの使い方を振り返る新機能reflect追加 (ITmedia NEWS)", url: "https://www.itmedia.co.jp/news/articles/2607/10/news086.html" },
      { title: "OpenAI officially releases GPT-5.6 (GIGAZINE)", url: "https://gigazine.net/gsc_news/en/20260710-gpt-5-6-openai" },
      { title: "OpenAI、最新GPT-5.6を9日一般公開 米政府が承認 (日本経済新聞)", url: "https://www.nikkei.com/article/DGXZQOGN084IU0Y6A700C2000000/" },
      { title: "Introducing Muse Spark 1.1 (Meta AI Blog)", url: "https://ai.meta.com/blog/introducing-muse-spark-meta-model-api/" },
      { title: "Meta enters the crowded AI coding battle with Muse Spark 1.1 (TechCrunch)", url: "https://techcrunch.com/2026/07/09/meta-enters-the-crowded-ai-coding-battle-with-muse-spark-1-1/" },
      { title: "Illinois Gov. Pritzker signs landmark AI Safety Measures Act into law (Transparency Coalition)", url: "https://www.transparencycoalition.ai/news/illinois-gov-pritzker-signs-landmark-ai-safety-measures-act-into-law" },
      { title: "AI News Today July 10 2026: 15 Biggest Stories (BuildFastWithAI)", url: "https://www.buildfastwithai.com/blogs/ai-news-today-july-10-2026" },
      { title: "AI Boost Program Demo Dayを7月10日に開催 (PR TIMES / STATION Ai)", url: "https://prtimes.jp/main/html/rd/p/000000120.000095825.html" }
    ]
  },
  {
    date: "2026-07-09",
    pick: "Anthropicの研究者がClaudeの内部『作業スペース（J-space）』を発見——答えとして現れる前に概念を保持・編集する領域の存在が判明し、AIの『思考』理解が一歩前進。一方でClaude Codeに『隠しトラッカー』が見つかり、Anthropicは『3月に始めた不正転売・蒸留対策の実験』と釈明する一幕も。",
    summary: [
      "Anthropicの研究で、Claudeが回答前に概念を保持・編集する内部領域『J-space』を持つことが判明。限定的な『グローバル・ワークスペース』に近い構造と説明され、AIの内部思考の解明が進む。",
      "Claude Codeのバンドルに隠し識別マーカーが発見され、Anthropicは『3月に開始した実験で、不正な再販売と蒸留（模倣モデル作成）を防ぐ目的だった』と説明。",
      "Claude for GovernmentでClaude Code・Coworkが公開ベータに（FedRAMP High対応）。売上は1月比+75%、Fortune100の70%が有料利用と急成長。"
    ],
    topics: [
      { title: "Anthropic研究、Claudeの内部『作業スペース（J-space）』を発見", why: "回答として言葉になる前に、概念を保持・編集・活用する領域がClaude内部にあると判明。人間の『グローバル・ワークスペース』に近い限定的な構造とされ、AIの『思考』を外から理解する手がかりになる。", idea: "AIは答える前に『考えて』いるのか——J-space発見が示すAIの内側", tag: "海外" },
      { title: "Claude Codeに『隠しトラッカー』——Anthropicは『実験だった』と釈明", why: "JavaScriptバンドルに埋め込まれた識別マーカーが研究者に発見された。Anthropicは『3月に始めた実験で、不正転売アカウントの検知と蒸留対策が目的』と説明。便利ツールの裏側の透明性が論点に。", idea: "使っているAIツールの『見えない仕組み』——透明性とユーザーの知る権利", tag: "海外" },
      { title: "Claude Cowork がモバイル/Webに拡張——定期タスク・モバイル承認に対応", why: "セッションとファイルが端末をまたいで同期。バックグラウンド作業・スケジュール実行・モバイルからの承認が可能に。非エンジニアの日常業務にエージェントがさらに入り込む。", idea: "スマホからAIに仕事を承認する日——Coworkモバイル化で変わる働き方", tag: "海外" },
      { title: "Claude for Government が公開ベータ——FedRAMP High環境で公共部門に開放", why: "政府機関がClaude Code・Coworkでソフト開発やメモ作成・RFPレビューを委任できる。公共分野での本格採用が進む土台に。", idea: "行政がAIエージェントで仕事を任せる時代——公共×Claudeの最前線", tag: "海外" },
      { title: "（国内）東大・日本マイクロソフト・リコー・レゾナックが『データファースト』を議論", why: "日本の大企業・学術・ベンダーが、AI活用の前提となるデータ整備（データファースト）の重要性を議論。実装事例が相次ぐ中、『使えるAI』の土台としてのデータの扱いが焦点に。", idea: "AI活用の前に来る『データ整備』——日本企業のデータファースト論", tag: "国内" }
    ],
    small: [
      "Anthropicの年換算収益（ARR）は約477億ドル規模に到達との報道——OpenAIを上回るペースで成長。",
      "DeNAがAI障害調査の所要時間を劇的に短縮、三菱UFJもAI活用構想を公表——国内大企業の実装が加速。"
    ],
    sources: [
      { title: "Anthropic found Claude's hidden workspace (The Neuron)", url: "https://www.theneurondaily.com/p/anthropic-found-claude-s-hidden-workspace" },
      { title: "Claude Code's hidden tracker was an experiment, says Anthropic (Malwarebytes)", url: "https://www.malwarebytes.com/blog/news/2026/07/claude-codes-hidden-tracker-was-an-experiment-says-anthropic" },
      { title: "Claude Updates by Anthropic - July 2026 (Releasebot)", url: "https://releasebot.io/updates/anthropic/claude" },
      { title: "Anthropic AI News Tracker (AI Weekly)", url: "https://aiweekly.co/ai-news-today/anthropic-news" },
      { title: "AIニュース速報（2026年7月8〜9日）(note)", url: "https://note.com/t_kawa_awak/n/n74f5b3797650" }
    ]
  },
  {
    date: "2026-07-08",
    pick: "OpenAIがGPT-5.6（Sol/Terra/Luna）の一般公開を発表——政府の制限が明け、同時に『聞きながら話す』音声モデル『GPT-Live』も披露。SpaceXAIのGrok 4.5も加わり、フロンティア競争は『性能』から『価格性能比』へと主戦場が移った。",
    summary: [
      "OpenAIがGPT-5.6を3価格帯（最上位Sol・中位Terra・最安Luna）で一般公開へ。同時に発話と傾聴を並行できる新音声モデル『GPT-Live』も発表。",
      "SpaceXAI『Grok 4.5』公開。入力$2・出力$6/MTokで『Opus級だが、より速く・トークン効率が高く・低コスト』を標榜。最上位級性能を前提に価格性能比が競争軸へ。",
      "Anthropicで政府発行IDによる本人確認ポリシーが7/8発効（Fable 5再展開の合意に基づく）。CoworkはWeb/モバイルへ拡張し、Microsoft 365の書き込み操作にも対応。"
    ],
    topics: [
      { title: "OpenAI、GPT-5.6（Sol/Terra/Luna）を一般公開へ＋音声モデル『GPT-Live』発表", why: "政府による限定が明け、3つの価格帯で一般提供。GPT-Liveは聞きながら同時に話せる音声モデルで、リアルタイム対話が一段進む。フロンティア競争が音声・速度へ広がる。", idea: "AIと『同時に話す』時代——GPT-Liveが変えるAI音声対話", tag: "海外" },
      { title: "SpaceXAI『Grok 4.5』公開——Opus級を$2/$6で、価格性能比が主戦場に", why: "入力$2・出力$6/MTokで最上位級の性能を低価格提供。GPT-5.6の3価格帯と合わせ、競争軸が『性能』から『いかに速く安く出すか』へ移ったことを象徴。", idea: "『安くて賢い』が当たり前になる——価格性能比で選ぶAIの時代", tag: "海外" },
      { title: "Anthropic、政府発行IDの本人確認ポリシーが7/8発効", why: "Fable 5の再展開に伴う合意の一環。条件を満たさないアカウントは本人確認を求められる。安全対策の強化と引き換えに、利用のハードルとプライバシーの論点も。", idea: "AIを使うのに『身分証』が要る日——安全対策とプライバシーの綱引き", tag: "海外" },
      { title: "Claude Cowork がWeb/モバイル拡張＋Microsoft 365の書き込み対応", why: "メール送信・カレンダー管理・OneDrive/SharePointの作成更新まで可能に。オフィス業務の実作業をAIに任せられる範囲が広がる。", idea: "AIがメールを送り、予定を組む——Cowork×Office連携の実力", tag: "海外" },
      { title: "（国内）DeNA・三菱UFJなど大企業のAI実装事例が相次ぐ", why: "DeNAはAI障害調査の所要時間を劇的に短縮、三菱UFJはAI活用構想を公表。日本の大企業でも『試す』から『現場で使う』段階への移行が具体化している。", idea: "日本の大企業は『どこで』AIを使い始めたか——実装事例に学ぶ", tag: "国内" }
    ],
    small: [
      "GPT-5.6の3モデル構成（Sol=最上位／Terra=中位／Luna=最安・高速）。用途に応じた使い分けが前提の設計。",
      "Google『Gemini 3.5 Pro』は延期が3週目に。トークン効率・コード性能・長タスク推論の課題対応が続く。"
    ],
    sources: [
      { title: "OpenAI to publicly release GPT-5.6, ending government limits (CNBC)", url: "https://www.cnbc.com/2026/07/08/openai-expanding-gpt-5point6-ai-model-release-ending-government-limits.html" },
      { title: "AI News Today July 8 2026: 15 Biggest Stories (BuildFastWithAI)", url: "https://www.buildfastwithai.com/blogs/ai-news-today-july-8-2026" },
      { title: "Anthropic Release Notes - July 2026 (Releasebot)", url: "https://releasebot.io/updates/anthropic" },
      { title: "AIニュース速報（2026年7月8〜9日）GPT-5.6・Grok 4.5・国内実装 (note)", url: "https://note.com/t_kawa_awak/n/n74f5b3797650" }
    ]
  },
  {
    date: "2026-07-07",
    pick: "Claude Fable 5、本日7/7をもってサブスクリプション包含が終了——明日7/8から入力$10・出力$50/百万トークンの使用量課金へ移行。Anthropicは「容量確保次第でサブスク復帰を目指す」と公式声明。永続廃止ではないが、当面はクレジットなしでは利用不可。",
    summary: [
      "Fable 5は本日7/7でPro・Max・Team・一部Enterpriseのサブスク包含が終了。7/8以降は使用量クレジット（入力$10・出力$50/MTok）が必要。Anthropicは「一時措置」と強調し容量確保後の復帰を明言。",
      "Googleが検索エンジン全体をGemini 3.5 Flash搭載のAI生成ページに刷新。クエリに対してAIがカスタム要約をリアルタイム生成する形式に全世界展開。25年ぶりの検索体験の大転換。",
      "ホワイトハウスがOpenAI・Anthropic・Googleとのフロンティア自主基準を今週にも正式発表へ。30日事前テスト・ベンチマーク・アクセスルールを盛り込んだ枠組みが制度化される見通し。"
    ],
    topics: [
      { title: "Claude Fable 5：7/7でサブスク包含終了——7/8より使用量課金（入力$10・出力$50/MTok）に移行", why: "Pro・Max・Team・一部Enterpriseユーザーが50%制限内で無追加料金利用できていたFable 5が本日で終了。7/8以降は使用量クレジットが必須になる。Anthropicは需要の予測困難を理由に挙げ、「容量が整い次第サブスクに戻す」と公式コメント。恒久廃止ではない点を明確化。", idea: "「最強AIモデル」を使い続けるには課金が必要な時代——Fable 5の価格転換が問うAI依存の代償", tag: "海外" },
      { title: "🔁続報：ホワイトハウスのフロンティアAI自主基準——今週正式発表へ、30日テスト窓口が制度化", why: "6/2大統領令（EO14409）に続き、OpenAI・Anthropic・Googleとの枠組みが最終合意に近い。リリース前30日間の政府レビュー・ベンチマーク評価・国内外アクセスルールを規定。採用されれば大型モデルのリリースは全て事前審査を経る構造になり、輸出管理の「緊急停止」より予測可能な体制へ移行。", idea: "「AIを世に出す前に政府が審査する」——自主基準と規制の境界線はどこか", tag: "海外" },
      { title: "Google検索がGemini 3.5 Flash全面採用——25年ぶりの大転換で「リンク一覧」が消える", why: "クエリに対しAIがカスタム要約ページをリアルタイム生成。視覚ツール・シミュレーション付きのインタラクティブ回答も対応。全世界・約200カ国・98言語・無料ユーザーへ展開。検索からのコンテンツ流入やSEOの構造が根本から変わる可能性。", idea: "Googleが「リンクを返す」のをやめた日——生成AI時代の情報発信者が考えるべきこと", tag: "海外" },
      { title: "（国内）SoftBankがOpenAI連携の「Patching as a Service」展開——重要インフラ向けAIサイバーセキュリティ", why: "SoftBankグループ・SoftBank Corp・SB OAI Japanが6/16に発表し順次拡大中。空港・電力・交通など重要インフラ上位3,000社を対象に、AI脆弱性診断と修正計画を提供。内部テストで1社あたり1万500件超の脆弱性を検出。自動パッチ適用ではなく専門家アドバイザリ型。", idea: "「AIがインフラを守る時代」——SoftBankのPaaSが示す国内サイバーセキュリティの変革", tag: "国内" },
      { title: "H1 2026 VC投資：全世界$5,100億のうちOpenAI＋Anthropicだけで43%（$2,170億）を独占", why: "世界全体のH1スタートアップ投資が過去最高の$5,100億に達し、そのうちOpenAIとAnthropicの2社だけで$2,170億（43%）を占める異常集中。AI以外セクターへの投資が相対的に圧縮されており、フロンティアAI2強への資本集中が構造化している。", idea: "「AI2強」が世界の投資マネーを吸い尽くす——資本超集中がスタートアップエコシステムに与える影響", tag: "市場" }
    ],
    small: [
      "Anthropicは「Fable 5のサブスク包含は一時休止であり、容量確保次第で復活させる」と公式コメント——恒久廃止ではない点を重ねて強調。",
      "Elon Musk、Grok 4.5をSpaceXとTeslaで限定プライベートベータ開始と発表（X投稿）。一般公開時期は未定。"
    ],
    sources: [
      { title: "Claude Fable 5 isnt permanently leaving subscriptions Anthropic says (BleepingComputer)", url: "https://www.bleepingcomputer.com/news/artificial-intelligence/claude-fable-5-isnt-permanently-leaving-subscriptions-anthropic-says/" },
      { title: "AI News Today July 6 2026: 15 Biggest Stories (BuildFastWithAI)", url: "https://www.buildfastwithai.com/blogs/ai-news-today-july-6-2026" },
      { title: "White House Nears Voluntary Frontier-Model Deal With Top AI Labs (AI Weekly)", url: "https://aiweekly.co/alerts/white-house-nears-voluntary-frontier-model-deal-with-top-ai-labs" },
      { title: "White House advances AI model release standards for US labs (Traders Union)", url: "https://tradersunion.com/news/financial-news/show/2550448-white-house-ai-model-standards/" },
      { title: "Google Search now uses Gemini 3.5 Flash for AI-summarised results (The Agency Journal)", url: "https://theagencyjournal.com/googles-gemini-3-5-flash-search-update-faster-more-useful-ai-answers-in-search/" },
      { title: "SoftBank Group Announces Patching as a Service (SoftBank Group)", url: "https://group.softbank/en/news/press/20260616" }
    ]
  },
  {
    date: "2026-07-06",
    pick: "Anthropic×TeraWulf：20年・総額190億ドル（約2.9兆円）のデータセンター契約を締結（7/6）——401MWのケンタッキー州施設でAIインフラ投資が「世代規模」に突入。同日、AI学習データの源だったAmazon Mechanical Turkも新規受付終了を発表し、「人間がAIを訓練する」時代の終わりを象徴した。",
    summary: [
      "AnthropicがTeraWulfとケンタッキー州Hawesvilleに20年・約190億ドルのリース契約を締結。401MW規模で2027年H2に初期稼働予定。AI電力インフラ投資が世代スパンに入った。",
      "ByteDance（Doubao）とAlibaba（Qwen）が7/15施行の中国「AIコンパニオン規制」に対応し、カスタムAIキャラクター機能を同日一斉停止。世界初の包括的AIコンパニオン法が施行。",
      "Amazon Mechanical Turkが7/30より新規受付を停止。ワーカーの33〜46%がすでにAIでタスクを完了させていた皮肉——クラウドソーシング型AI学習データ収集が実質的な終焉へ。"
    ],
    topics: [
      { title: "Anthropic×TeraWulf：20年・190億ドル・401MWのデータセンターリースを締結（7/6）", why: "ケンタッキー州のJustified Dataキャンパスで401MWのAIインフラを確保。2027年後半から段階的稼働し、2028年初頭に全量稼働予定。20年間の契約総額は約190億ドルで単一AIインフラ契約として最大規模クラス。AnthropicがGoogle・Broadcomとの提携に続き「数十年単位」でコンピュート確保に動いていることを示す。", idea: "「2.9兆円のデータセンター契約」が示す未来——AIインフラ競争が世代スパンに突入した理由", tag: "海外" },
      { title: "中国「AIコンパニオン規制」7/15施行——ByteDance・AlibabaがカスタムAIキャラ機能を一斉停止", why: "中国サイバースペース管理局が4月に制定した規制が7/15に施行。2時間超の連続会話に「AIと話しています」の強制表示・14歳未満は本人確認が必須。対応できないユーザー作成エージェントは一括削除。ByteDanceはチャット履歴を10/15まで閲覧のみで保持するが、AlibabaはデータDeletion計画を未公表。AIコンパニオン産業への世界初の包括規制として各国の立法に影響を与えうる。", idea: "「AIと友達になる」を国が規制する日——中国のAIコンパニオン法が示す次の論点", tag: "海外" },
      { title: "ホワイトハウス、OpenAI・Google・AnthropicとフロンティアAI自主基準を最終調整——近日発表へ", why: "Fable 5停止事件（6月）を契機に策定が加速。ベンチマーク・テスト期間・アクセスルールを定める枠組みで合意が近い。採用されれば輸出規制で突然停止させるのではなく、テストと審査で解除する構造に移行。AI企業と政府の関係が制度化される分水嶺。", idea: "政府がAIに「ルール」を与える日——自主基準と規制のどこが違うのか", tag: "海外" },
      { title: "Amazon Mechanical Turk、7/30より新規受付停止——クラウドソーシング型AI学習の終焉", why: "2005年開始の「人力AIタスク」プラットフォームが事実上の廃止フェーズへ。調査ではプラットフォームのワーカーの33〜46%がすでにAIを使ってタスクを完了させていた。「人間がAIを訓練する」モデルをAI自身が追い越した象徴的な終幕。SageMaker GroundTruthなど後継へ移行を促す。", idea: "AIが自分の先生を追い越す日——Amazon Mechanical Turkの終わりが意味すること", tag: "海外" },
      { title: "（国内）Sakana AI「Fugu」公開——マルチエージェント集合知でFable 5・GPT-5.5に匹敵", why: "日本のAIスタートアップSakana AIがFuguを一般公開。ICLR 2026採択論文（TRINITY・Conductor）をベースに複数AIを動的に束ねるオーケストレーションモデル。$20〜$200/月のサブスクで提供。外資モデル依存なしにフロンティア性能を実現した国産アプローチとして注目。7/31までの申し込みで2カ月目無料キャンペーン実施中。", idea: "日本生まれのAIが世界最高峰に挑む——Sakana Fuguのマルチエージェント戦略を理解する", tag: "国内" }
    ],
    small: [
      "中国のZ.ai「GLM-5.2」がAnthropicやOpenAIに匹敵する性能を低コストで実現——中米AI差縮小の象徴として業界の論争を再加熱。",
      "TeraWulfはAbernathy合弁の過半数持分をFluidStackへ5.3億ドルで同時売却し、Anthropicリース支援のための財務基盤も整備完了。"
    ],
    sources: [
      { title: "Anthropic signs lease for TeraWulf data center in Kentucky (CNBC)", url: "https://www.cnbc.com/2026/07/06/anthropic-terawulf-data-center-ai.html" },
      { title: "TeraWulf Announces Anthropic Lease at Justified Data Campus (TeraWulf IR)", url: "https://investors.terawulf.com/news-events/press-releases/detail/142/terawulf-announces-anthropic-lease-at-justified-data-campus-and-sale-of-majority-interest-in-abernathy-joint-venture-to-fluidstack" },
      { title: "ByteDances Doubao and Alibabas Qwen to shut down AI agent features on July 15 (TechNode)", url: "https://technode.com/2026/07/06/bytedances-doubao-and-alibabas-qwen-to-shut-down-ai-agent-features-on-july-15/" },
      { title: "ByteDance Alibaba pull AI companions as Beijing tightens rules (Bloomberg)", url: "https://www.bloomberg.com/news/articles/2026-07-06/bytedance-alibaba-pull-ai-companions-as-beijing-tightens-rules" },
      { title: "White House Races to Finalize AI Model Rules With OpenAI Google and Anthropic (TipRanks)", url: "https://www.tipranks.com/news/white-house-races-to-finalize-ai-model-rules-with-openai-google-and-anthropic" },
      { title: "Amazon will stop accepting new customers for Mechanical Turk (TechCrunch)", url: "https://techcrunch.com/2026/07/05/amazon-will-stop-accepting-new-customers-for-mechanical-turk/" },
      { title: "Sakana Fugu: One Model to Command Them All (Sakana AI)", url: "https://sakana.ai/fugu-release/" },
      { title: "Japans Sakana Fugu multiagent AI scores well against Fable 5 GPT-5.5 (Nikkei Asia)", url: "https://asia.nikkei.com/business/technology/artificial-intelligence/japan-s-sakana-fugu-multiagent-ai-scores-well-against-fable-5-gpt-5.5" }
    ]
  },
  {
    date: "2026-07-05",
    pick: "🔁続報：日本政府がNoetra（SoftBank・Sony・NEC・Honda）への支援規模を最大$6.2B（約1兆円）と正式確定——国産AI基盤構築が国家プロジェクトとして本格始動。外資依存からの自立を史上最大規模のAI投資として国家戦略に格上げ。",
    summary: [
      "日本政府がNoetra支援規模を最大$6.2B（約1兆円）と正式発表。初年度確定は¥387.3B（$2.38B）。SoftBank・Sony・NEC・Hondaが設立し、40社以上の産業横断参画を目指す。",
      "NVIDIA BioNeMoがClaude Scienceに統合——細胞解析52分→25秒、創薬タスク最大3,000倍高速化。7/2公開ベータ開始。AIが科学実験の「リアルタイム思考拡張」に転換。",
      "SoftBankが米国で10GW規模AIクラウドサービスを来年度開始予定と発表。同時にOpenAIへの$10B融資交渉を再開し、日本発AIインフラの国際展開が加速。"
    ],
    topics: [
      { title: "🔁続報：日本のNoetra国産AI基盤、政府支援が最大$6.2Bに拡大——SoftBank・Sony・NEC・Honda連合が本格始動", why: "初年度確定額¥387.3B（$2.38B）。フィジカルAI（ロボット・製造）と高度な日本語理解の両軸。9社支援・40社以上の産業横断参加を計画。外資AI一辺倒からの「AI自立」を国家戦略に格上げ。", idea: "「日本のAI独立宣言」——1兆円プロジェクトNoetraが目指すもの", tag: "国内" },
      { title: "NVIDIA BioNeMo × Claude Science：科学ワークフローが52分→25秒に——生物研究AIが本格稼働", why: "7/2公開ベータで統合。RAPIDS-singlecellで細胞解析が52分→25秒、nvMolKitで創薬タスク最大3,000倍高速化。研究者は自然言語でゲノミクス・プロテオミクス・創薬パイプラインを操作可能に。AIが「バッチ処理ツール」から「リアルタイム思考の拡張」へ。", idea: "AIが研究室に常駐する日——Claude×NVIDIAが変える科学の速度", tag: "海外" },
      { title: "SoftBank、米国で10GW規模AIクラウドを来年度開始——OpenAI $10B融資交渉も再開", why: "AIコンピュートを米国で10ギガワット規模で調達しクラウドサービスとして提供予定。OpenAIへの$10B融資はOpenAI株を担保とした構造で交渉再開。孫正義氏の「AIは50倍のドットコムバブル」発言と一致する超攻撃的投資戦略。", idea: "孫正義の次の一手——SoftBankが「AIインフラ帝国」を米国で建設する理由", tag: "国内" },
      { title: "Claude Code 2.1.201：Sonnet 5セッションの異常挙動を修正", why: "ハーネスリマインダーがミッドコンバセーションのシステムロールを汚染しなくなる修正。Sonnet 5を使う長時間エージェントタスクで発生しえた不安定動作に対処。", idea: "「見えない不具合」が長時間エージェントを壊す——Claude Codeのセッション設計を理解する", tag: "海外" }
    ],
    small: [
      "Gemini 3.5 ProはVertex AIの限定プレビュー段階を継続——7月中の一般公開を目標にするが日程未確定。トークン効率・コード品質・長タスク推論の3課題を修正中。",
      "SoftBankのOpenAI $10B融資交渉はOpenAI株担保構造。コンセッション（条件緩和）を追加して再交渉中。"
    ],
    sources: [
      { title: "Japan backs SoftBank-led AI models with up to $6.2bn (Nikkei Asia)", url: "https://asia.nikkei.com/business/technology/artificial-intelligence/japan-backs-softbank-led-ai-models-with-up-to-6.2bn-in-chasing-us-china" },
      { title: "Japan launches US$6.2 billion AI initiative (Digitimes)", url: "https://www.digitimes.com/news/a20260701VL202/japan-ai-investment-industrial-infrastructure.html" },
      { title: "NVIDIA BioNeMo accelerates Anthropic Claude Science (AI News)", url: "https://www.artificialintelligence-news.com/news/nvidia-bionemo-accelerates-anthropic-claude-science/" },
      { title: "SoftBank plans AI compute in U.S. at 10-gigawatt scale (Japan Times)", url: "https://www.japantimes.co.jp/business/2026/07/03/companies/softbank-ai-cloud-service/" },
      { title: "SoftBank renews $10B loan talks against OpenAI stake (US News)", url: "https://www.usnews.com/news/top-news/articles/2026-07-01/exclusive-softbank-renews-talks-for-10-billion-loan-against-openai-stake-adds-concessions-sources-say" },
      { title: "Claude Code Updates by Anthropic - July 2026 (Releasebot)", url: "https://releasebot.io/updates/anthropic/claude-code" }
    ]
  },
  {
    date: "2026-07-04",
    pick: "Anthropicがサイバージェイルブレイク深刻度（CJS）フレームワークを7/3に提案——Amazon・Microsoft・Googleも参画し、業界初のジェイルブレイクリスク共通尺度が誕生。Fable 5停止事件を機に生まれた安全基準が業界標準へ向けて動き出す。",
    summary: [
      "Anthropicが7/3、ジェイルブレイクの深刻度をCJS-0〜CJS-4の5段階で評価するフレームワークをAmazon・Microsoft・Googleと共同提案。今後は緊急輸出規制に頼らず、構造化されたトリアージで対処できる体制を目指す。",
      "SmartNewsが7/2にAI Transformation Divisionを新設しClaude Codeを全社員展開。エンジニア以外の全職種が対象で、日本のテック企業による全社規模のClaude Code導入の先行事例に。",
      "AnthropicがApple Foundation ModelsフレームワークのSwiftパッケージを公開。iOS/macOS 27向けにClaudeをオンデバイスと同じAPIで呼び出せ、アプリ内でのAI切り替えが透過的に行える。"
    ],
    topics: [
      { title: "Anthropic、業界初のサイバージェイルブレイク深刻度（CJS）フレームワークを提案", why: "Fable 5の19日間停止を招いた事態を受け、Amazon・Microsoft・Googleと共同で策定。4軸（能力上乗せ・汎用性・兵器化の容易さ・発見しやすさ）で評価しCJS-0〜CJS-4の5段階に分類。採用されれば『発見→緊急輸出規制』の連鎖を構造化トリアージに置き換えられる。", idea: "「AIを止めないための仕組み」——CJSフレームワークが変えるAI安全基準の未来", tag: "海外" },
      { title: "（国内）SmartNews、AI Transformation Divisionを新設しClaude Codeを全社員展開", why: "7/2発表。エンジニア以外の全職種がClaude Codeを利用できる環境を整備。開発ツール・認証・コスト管理を統合する共通インフラも並行構築中。日本テック企業による全社規模Claude Code導入の先行事例。", idea: "「全員がAIを使う会社」になるには——SmartNewsのClaude Code全社展開から学ぶこと", tag: "国内" },
      { title: "Claude、Apple Foundation ModelsフレームワークのSwiftパッケージを公開", why: "iOS/macOS/watchOS 27向けに、Claudeをオンデバイスと同じLanguageModelSession APIで呼び出せる。ストリーミング・ツール呼び出し・誘導生成も対応。Apple開発者がClaudeをアプリに組み込む導線が大きく広がった。", idea: "iPhoneアプリにClaudeを組み込む日——Apple×ClaudeのSwift連携が変えること", tag: "海外" },
      { title: "AnthropicがGoogleおよびBroadcomと次世代コンピュート向けパートナーシップを拡大", why: "数ギガワット規模の次世代コンピュートインフラを確保。急増する顧客需要への対応と「規律ある拡張」が目的。AIインフラ競争での持続的優位を狙う。", idea: "AIの裏側にある「電力争奪戦」——Anthropicのインフラ戦略を読む", tag: "海外" },
      { title: "AnthropicのARRが$30Bを突破、OpenAIを上回るペースで急成長", why: "Claude Sonnet 5リリースとFable 5復帰が追い風。エージェント用途の拡大で利用量が急増。Fortuneがこれを受け「OpenAIはGoogleとAnthropicに追われている」と報道。", idea: "「使っているAI」が業界トップの収益を上げている件——Anthropicの急成長を数字で見る", tag: "市場" }
    ],
    small: [
      "CJSスケールは4軸（能力上乗せ・汎用性・兵器化の容易さ・発見しやすさ）で評価。CJS-0（情報提供レベル）〜CJS-4（緊急）の5段階。",
      "Claude for Foundation ModelsはApache 2.0ライセンスでOSS公開。GitHubリポジトリ: anthropics/ClaudeForFoundationModels。"
    ],
    sources: [
      { title: "Anthropic Unveils Cyber Jailbreak Severity Framework (GBHackers)", url: "https://gbhackers.com/anthropic-unveils-cyber-jailbreak-severity-framework/" },
      { title: "Anthropic details Claude Fable 5 cybersecurity safeguards and jailbreak framework (CryptoBriefing)", url: "https://cryptobriefing.com/anthropic-claude-fable-5-jailbreak-framework/" },
      { title: "SmartNews launches AI Transformation Division with Claude Code rollout (IBTimes JP)", url: "https://jp.ibtimes.com/smartnews-launches-ai-transformation-division-claude-code-rollout-102273" },
      { title: "Claude support for Apple Foundation Models framework (Anthropic Blog)", url: "https://claude.com/blog/claude-for-foundation-models" },
      { title: "Anthropic expands partnership with Google and Broadcom (Anthropic)", url: "https://www.anthropic.com/news/google-broadcom-partnership-compute" },
      { title: "Sam Altman seeks new world order as OpenAI loses ground to Anthropic (Fortune)", url: "https://fortune.com/2026/07/02/sam-altman-new-world-order-ai-openai-google-anthropic/" }
    ]
  },
  {
    date: "2026-07-03",
    pick: "Claude Code 2.1.198がリリース——Chrome版が一般公開。ドラフトPR自動作成・バックグラウンド通知など「止まらないエージェント」設計が本格化。",
    summary: [
      "Claude Code 2.1.198が公開。Chromeへの一般公開・バックグラウンド通知・ドラフトPR自動コミット＆プッシュ・新スキル「/dataviz」が追加。人間の確認待ちを減らす自律設計が加速。",
      "国内では経産省が国産フィジカルAI基盤モデルの開発事業を開始。SB IntuitionsもSarashina3シリーズ5モデルを提供開始し、外資依存からの脱却を目指す動きが同日加速。",
      "Stanford AI Index 2026：AIエージェントの実世界タスク成功率が1年で20%→77.3%に急上昇。Googleは「Gemini 3.5 Pro」を6月から7月に延期し、過剰トークン消費への対処を優先。"
    ],
    topics: [
      { title: "Claude Code 2.1.198——Chrome一般公開・ドラフトPR自動化・/datavizスキル追加", why: "バックグラウンド通知でエージェントが人間の返答待ちなく動き続ける設計に。ドラフトPRの自動コミット・プッシュも追加。/datavizはカラーパレット検証付きチャート設計スキル。", idea: "「止まらないClaude Code」を使いこなす——2.1.198新機能全解説", tag: "海外" },
      { title: "🔁続報：GPT-5.6 Sol——Cerebrasで最大750トークン/秒、一般公開は7月中目標", why: "6/26の限定プレビューから約1週間。Cerebras連携で超高速推論（750tok/秒）が明らかに。Sol/Terra/Lunaの正式価格（Sol $5/$30 per MTok）も発表。一般公開は7月中を目標。", idea: "フロンティアAIのスピード競争——750トークン/秒が変えること", tag: "海外" },
      { title: "Google「Gemini 3.5 Pro」7月に延期——大規模エージェントでトークン過剰消費が判明", why: "Google I/O（5/19）でSundar Pichai氏が6月公開を予告していたが延期。エンタープライズテスターから長期エージェントタスクでのコスト超過の指摘。「速い発表」より「使えるリリース」を優先する判断。", idea: "「発表したのに出ない」問題——AI企業のリリース遅延から学ぶこと", tag: "海外" },
      { title: "AIエージェント成功率、1年で20%→77.3%に急上昇（Stanford AI Index 2026）", why: "実世界タスクの成功率が約4倍。サイバーセキュリティ分野では15%→93%。ツール活用と反復検証の組み合わせが急進化の鍵。「まだ実験段階」という認識が急速に塗り替えられている。", idea: "「AIはまだ使えない」は1年前の話——成功率4倍の進化を数字で理解する", tag: "市場" },
      { title: "（国内）経産省、国産フィジカルAI基盤モデルの開発事業を開始", why: "NoetraとNAISTを採択、SoftBankらが投資。ロボット・製造向けの日本独自AI基盤を構築。外資AIへの依存リスクを軽減する国家戦略の一環として注目。", idea: "日本が「自前のAI」を持つ日——経産省フィジカルAI開発の意義", tag: "国内" },
      { title: "（国内）SB Intuitions「Sarashina3シリーズ」提供開始——RAG・安全運用向け国産LLM5モデル", why: "SoftBank傘下SB IntuitionsがRAGおよび安全な業務運用に最適化した国産LLM5種を公開。日本語特化モデルの選択肢がさらに拡大。", idea: "「日本語が得意なAI」はどれを選ぶ——国産LLM最新比較の視点", tag: "国内" }
    ],
    small: [
      "GPT-5.6 Sol/Terra/Lunaの価格：Sol $5/$30・Terra $2.5/$15・Luna $1/$6（入力/出力 per MTok）。",
      "Stanford AI Index 2026：生成AI普及率が3年で53%に到達。PCやインターネットより速い普及スピード。"
    ],
    sources: [
      { title: "Claude Updates by Anthropic - July 2026 (Releasebot)", url: "https://releasebot.io/updates/anthropic/claude" },
      { title: "Previewing GPT-5.6 Sol (OpenAI)", url: "https://openai.com/index/previewing-gpt-5-6-sol/" },
      { title: "OpenAI unveils GPT-5.6 Sol, Terra and Luna models (VentureBeat)", url: "https://venturebeat.com/technology/openai-unveils-gpt-5-6-sol-terra-and-luna-models-but-only-accessible-to-limited-preview-partners-for-now-per-us-gov" },
      { title: "AI Updates Today - July 2026 (LLM Stats)", url: "https://llm-stats.com/llm-updates" },
      { title: "The 2026 AI Index Report (Stanford HAI)", url: "https://hai.stanford.edu/ai-index/2026-ai-index-report" },
      { title: "国産フィジカルAI・Sarashina3最新動向 (Ledge.ai)", url: "https://ledge.ai/" }
    ]
  },
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
