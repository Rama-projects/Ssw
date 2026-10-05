const sessionsData = {
    "sesi1": {
        title: "Paket 1",
        timeLimit: 3600, // 60 Menit
        questions: [
            {
                question: "安全<ruby>不<rt>ふ</rt>安<rt>あん</rt></ruby>定ではない<ruby>食<rt>しょく</rt>品<rt>ひん</rt></ruby>を<ruby>作<rt>つく</rt></ruby>って、それが<ruby>売<rt>う</rt></ruby>られてしまうとどうなりますか。<ruby>正<rt>ただ</rt></ruby>しいものを<ruby>一<rt>ひと</rt></ruby>つ<ruby>選<rt>えら</rt></ruby>びなさい。",
                options: [
                    "<ruby>食<rt>しょく</rt>品<rt>ひん</rt></ruby>を<ruby>食<rt>た</rt></ruby>べた<ruby>人<rt>ひと</rt></ruby>が<ruby>病<rt>びょう</rt>気<rt>き</rt></ruby>になって、<ruby>作<rt>つく</rt></ruby>った<ruby>会<rt>かい</rt>社<rt>しゃ</rt></ruby>の<ruby>信<rt>しん</rt>用<rt>よう</rt></ruby>が<ruby>落<rt>お</rt></ruby>ちる。",
                    "<ruby>食<rt>しょく</rt>品<rt>ひん</rt></ruby>を<ruby>作<rt>つく</rt></ruby>った<ruby>会<rt>かい</rt>社<rt>しゃ</rt></ruby>が<ruby>有<rt>ゆう</rt>名<rt>めい</rt></ruby>になって、その<ruby>会<rt>かい</rt>社<rt>しゃ</rt></ruby>の<ruby>別<rt>べつ</rt></ruby>の<ruby>商<rt>しょう</rt>品<rt>ひん</rt></ruby>が<ruby>売<rt>う</rt></ruby>れる。",
                    "<ruby>食<rt>しょく</rt>品<rt>ひん</rt></ruby>を<ruby>作<rt>つく</rt></ruby>った<ruby>人<rt>ひと</rt></ruby>が<ruby>病<rt>びょう</rt>気<rt>き</rt></ruby>になって、<ruby>給<rt>きゅう</rt>料<rt>りょう</rt></ruby>が<ruby>下<rt>さ</rt></ruby>がる。"
                ],
                answer: 0
            },
            {
                question: "<ruby>職<rt>しょく</rt>場<rt>ば</rt></ruby>に<ruby>行<rt>い</rt></ruby>く<ruby>前<rt>まえ</rt></ruby>に<ruby>体<rt>からだ</rt></ruby>の<ruby>調<rt>ちょう</rt>子<rt>し</rt></ruby>が<ruby>悪<rt>わる</rt></ruby>い<ruby>時<rt>とき</rt></ruby>に、どうすれば<ruby>良<rt>よ</rt></ruby>いですか。<ruby>正<rt>ただ</rt></ruby>しいものを<ruby>一<rt>ひと</rt></ruby>つ<ruby>選<rt>えら</rt></ruby>びなさい。",
                options: [
                    "どんな<ruby>体<rt>からだ</rt></ruby>の<ruby>調<rt>ちょう</rt>子<rt>し</rt></ruby>が<ruby>悪<rt>わる</rt></ruby>くても、<ruby>職<rt>しょく</rt>場<rt>ば</rt></ruby>へ<ruby>行<rt>い</rt></ruby>く。",
                    "<ruby>誰<rt>だれ</rt></ruby>でも<ruby>連<rt>れん</rt>絡<rt>らく</rt></ruby>しないで、<ruby>仕<rt>し</rt>事<rt>ごと</rt></ruby>を<ruby>休<rt>やす</rt></ruby>む。",
                    "<ruby>職<rt>しょく</rt>場<rt>ば</rt></ruby>の<ruby>責<rt>せき</rt>任<rt>にん</rt>者<rt>しゃ</rt></ruby>に<ruby>連<rt>れん</rt>絡<rt>らく</rt></ruby>して、<ruby>仕<rt>し</rt>事<rt>ごと</rt></ruby>を<ruby>休<rt>やす</rt></ruby>む。"
                ],
                answer: 2
            },
            {
                question: "<ruby>機<rt>き</rt>械<rt>かい</rt></ruby>や<ruby>器<rt>き</rt>具<rt>ぐ</rt></ruby>を<ruby>洗<rt>せん</rt>浄<rt>じょう</rt></ruby>するときに、どのようにしますか。<ruby>正<rt>ただ</rt></ruby>しいものを<ruby>一<rt>ひと</rt></ruby>つ<ruby>選<rt>えら</rt></ruby>びなさい。",
                options: [
                    "<ruby>洗<rt>せん</rt>浄<rt>じょう</rt></ruby>する<ruby>部<rt>ぶ</rt>分<rt>ぶん</rt></ruby>を、<ruby>日<rt>ひ</rt></ruby>によって<ruby>変<rt>か</rt></ruby>える。",
                    "<ruby>洗<rt>せん</rt>浄<rt>じょう</rt></ruby><ruby>剤<rt>ざい</rt></ruby>の<ruby>濃<rt>のう</rt>度<rt>ど</rt></ruby>を<ruby>確<rt>かく</rt>認<rt>にん</rt></ruby>する。",
                    "<ruby>洗<rt>せん</rt>浄<rt>じょう</rt></ruby><ruby>剤<rt>ざい</rt></ruby>で<ruby>洗<rt>あら</rt></ruby>った<ruby>後<rt>あと</rt></ruby>、<ruby>洗<rt>あら</rt></ruby>い<ruby>流<rt>なが</rt></ruby>さずに<ruby>乾<rt>かわ</rt></ruby>かす。"
                ],
                answer: 1
            },
            {
                question: "<ruby>作<rt>さ</rt>業<rt>ぎょう</rt></ruby><ruby>中<rt>ちゅう</rt></ruby>はどのような<ruby>態<rt>たい</rt>度<rt>ど</rt></ruby>がいいですか。<ruby>正<rt>ただ</rt></ruby>しいものを<ruby>一<rt>ひと</rt></ruby>つ<ruby>選<rt>えら</rt></ruby>びなさい。",
                options: [
                    "<ruby>製<rt>せい</rt>品<rt>ひん</rt></ruby>の<ruby>状<rt>じょう</rt>態<rt>たい</rt></ruby>や、<ruby>異<rt>い</rt>物<rt>ぶつ</rt></ruby>があるかどうか<ruby>注<rt>ちゅう</rt>意<rt>い</rt></ruby>する。",
                    "<ruby>隣<rt>となり</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>とテレビの<ruby>話<rt>はな</rt></ruby>しながら<ruby>作<rt>さ</rt>業<rt>ぎょう</rt></ruby>する。",
                    "<ruby>時<rt>じ</rt>間<rt>かん</rt></ruby>が<ruby>気<rt>き</rt></ruby>になるので、<ruby>何<rt>なん</rt></ruby><ruby>度<rt>ど</rt></ruby>も<ruby>時<rt>とき</rt></ruby><ruby>計<rt>けい</rt></ruby>を<ruby>見<rt>み</rt></ruby>る。"
                ],
                answer: 0
            },
            {
                question: "<ruby>作<rt>さ</rt>業<rt>ぎょう</rt></ruby><ruby>中<rt>ちゅう</rt></ruby>の<ruby>衛<rt>えい</rt>生<rt>せい</rt></ruby><ruby>的<rt>てき</rt></ruby>な<ruby>行<rt>こう</rt>動<rt>どう</rt></ruby>として<ruby>正<rt>ただ</rt></ruby>しいものを<ruby>一<rt>ひと</rt></ruby>つ<ruby>選<rt>えら</rt></ruby>びなさい。",
                options: [
                    "トイレの<ruby>後<rt>あと</rt></ruby>は、<ruby>洗<rt>せん</rt>剤<rt>ざい</rt></ruby>で<ruby>手<rt>て</rt></ruby>を<ruby>洗<rt>あら</rt></ruby>って、<ruby>消<rt>しょう</rt>毒<rt>どく</rt></ruby><ruby>液<rt>えき</rt></ruby>で<ruby>消<rt>しょう</rt>毒<rt>どく</rt></ruby>する。",
                    "<ruby>髪<rt>かみ</rt>の<ruby>毛<rt>け</rt></ruby>や<ruby>鼻<rt>はな</rt></ruby>を<ruby>触<rt>さわ</rt></ruby>った<ruby>後<rt>あと</rt></ruby>は、3<ruby>秒<rt>びょう</rt></ruby><ruby>待<rt>ま</rt></ruby>ってから<ruby>作<rt>さ</rt>業<rt>ぎょう</rt></ruby>する。",
                    "<ruby>手<rt>て</rt></ruby>がぬれた<ruby>時<rt>とき</rt></ruby>は、<ruby>作<rt>さ</rt>業<rt>ぎょう</rt></ruby><ruby>服<rt>ふく</rt></ruby>でふいて、<ruby>乾<rt>かわ</rt></ruby>いたのを<ruby>確<rt>かく</rt>認<rt>にん</rt></ruby>する。"
                ],
                answer: 0
            },
            {
                question: "「5S<ruby>活<rt>かつ</rt>動<rt>どう</rt></ruby>」とは、<ruby>一<rt>いっ</rt>般<rt>ぱん</rt></ruby><ruby>衛<rt>えい</rt>生<rt>せい</rt></ruby><ruby>管<rt>かん</rt>理<rt>り</rt></ruby><ruby>者<rt>しゃ</rt></ruby>のための5つの<ruby>主<rt>しゅ</rt>要<rt>よう</rt></ruby>な<ruby>活<rt>かつ</rt>動<rt>どう</rt></ruby>のことです。「<ruby>整<rt>せい</rt>理<rt>り</rt></ruby>」「<ruby>整<rt>せい</rt>頓<rt>とん</rt></ruby>」「<ruby>清<rt>せい</rt>潔<rt>けつ</rt></ruby>」「<ruby>習<rt>しゅう</rt>慣<rt>かん</rt></ruby>」の<ruby>他<rt>ほか</rt></ruby>の1つは何ですか。<ruby>正<rt>ただ</rt></ruby>しいものを<ruby>一<rt>ひと</rt></ruby>つ<ruby>選<rt>えら</rt></ruby>びなさい。",
                options: [
                    "<ruby>集<rt>しゅう</rt>中<rt>ちゅう</rt></ruby>",
                    "<ruby>制<rt>せい</rt>作<rt>さく</rt></ruby>",
                    "<ruby>清<rt>せい</rt>掃<rt>そう</rt></ruby>"
                ],
                answer: 2
            },
            {
                question: "5S<ruby>活<rt>かつ</rt>動<rt>どう</rt></ruby>の中の「<ruby>整<rt>せい</rt>頓<rt>とん</rt></ruby>」は、どのような<ruby>活<rt>かつ</rt>動<rt>どう</rt></ruby>ですか。<ruby>正<rt>ただ</rt></ruby>しいものを<ruby>一<rt>ひと</rt></ruby>つ<ruby>選<rt>えら</rt></ruby>びなさい。",
                options: [
                    "<ruby>職<rt>しょく</rt>場<rt>ば</rt></ruby>や<ruby>工<rt>こう</rt>場<rt>じょう</rt></ruby>などのゴミを<ruby>捨<rt>す</rt></ruby>てる。",
                    "<ruby>決<rt>き</rt></ruby>められたことを<ruby>常<rt>つね</rt></ruby>に<ruby>守<rt>まも</rt></ruby>って<ruby>実<rt>じっ</rt>行<rt>こう</rt></ruby>する。",
                    "<ruby>作<rt>さ</rt>業<rt>ぎょう</rt></ruby><ruby>道<rt>どう</rt>具<rt>ぐ</rt></ruby>や<ruby>材<rt>ざい</rt>料<rt>りょう</rt></ruby>の<ruby>置<rt>お</rt></ruby>き<ruby>場<rt>ば</rt></ruby><ruby>所<rt>しょ</rt></ruby>を<ruby>決<rt>き</rt></ruby>めておく。"
                ],
                answer: 2
            },
            {
                question: "ノロウイルスによる<ruby>食<rt>しょく</rt>中<rt>ちゅう</rt>毒<rt>どく</rt></ruby>の<ruby>主<rt>おも</rt></ruby>な<ruby>原<rt>げん</rt>因<rt>いん</rt></ruby>になる<ruby>食<rt>しょく</rt>品<rt>ひん</rt></ruby>は何ですか。<ruby>正<rt>ただ</rt></ruby>しいものを<ruby>一<rt>ひと</rt></ruby>つ<ruby>選<rt>えら</rt></ruby>びなさい。",
                options: [
                    "<ruby>米<rt>こめ</rt></ruby>、<ruby>麦<rt>むぎ</rt></ruby>、<ruby>豆<rt>まめ</rt></ruby>",
                    "<ruby>卵<rt>たまご</rt></ruby>、<ruby>鶏<rt>とり</rt>肉<rt>にく</rt></ruby>",
                    "<ruby>牡<rt>か</rt></ruby><ruby>蠣<rt>き</rt></ruby>などの<ruby>二<rt>に</rt>枚<rt>まい</rt></ruby><ruby>貝<rt>がい</rt></ruby>"
                ],
                answer: 2
            },
            {
                question: "<ruby>主<rt>おも</rt></ruby>な<ruby>原<rt>げん</rt>因<rt>いん</rt></ruby>になる<ruby>食<rt>しょく</rt>品<rt>ひん</rt></ruby>は<ruby>食<rt>しょく</rt>肉<rt>にく</rt></ruby>（<ruby>鶏<rt>とり</rt>肉<rt>にく</rt></ruby>）で、<ruby>感<rt>かん</rt>染<rt>せん</rt></ruby>すると、<ruby>下<rt>げ</rt>痢<rt>り</rt></ruby>、<ruby>腹<rt>ふく</rt>痛<rt>つう</rt></ruby>、<ruby>発<rt>はつ</rt>熱<rt>ねつ</rt></ruby>の<ruby>症<rt>しょう</rt>状<rt>じょう</rt></ruby>が<ruby>出<rt>で</rt></ruby>る<ruby>細<rt>さい</rt>菌<rt>きん</rt></ruby>はどれですか。<ruby>正<rt>ただ</rt></ruby>しいものを<ruby>一<rt>ひと</rt></ruby>つ<ruby>選<rt>えら</rt></ruby>びなさい。",
                options: [
                    "カンピロバクター<ruby>属<rt>ぞく</rt></ruby><ruby>菌<rt>きん</rt></ruby>",
                    "<ruby>腸<rt>ちょう</rt></ruby><ruby>炎<rt>えん</rt></ruby>ビブリオ",
                    "ボツリヌス<ruby>菌<rt>きん</rt></ruby>"
                ],
                answer: 0
            },
            {
                question: "<ruby>食<rt>しょく</rt>品<rt>ひん</rt></ruby><ruby>工<rt>こう</rt>場<rt>じょう</rt></ruby>で<ruby>食<rt>しょく</rt>中<rt>ちゅう</rt></ruby><ruby>毒<rt>どく</rt></ruby>を<ruby>予<rt>よ</rt>防<rt>ぼう</rt></ruby>するために<ruby>必<rt>ひつ</rt>要<rt>よう</rt></ruby>なことは何ですか。<ruby>正<rt>ただ</rt></ruby>しいものを<ruby>一<rt>ひと</rt></ruby>つ<ruby>選<rt>えら</rt></ruby>びなさい。",
                options: [
                    "<ruby>器<rt>き</rt>具<rt>ぐ</rt></ruby>、<ruby>容<rt>よう</rt>器<rt>き</rt></ruby>、<ruby>装<rt>そう</rt>置<rt>ち</rt></ruby>などは、<ruby>常<rt>つね</rt></ruby>に<ruby>清<rt>せい</rt>潔<rt>けつ</rt></ruby>にする。",
                    "<ruby>生<rt>なま</rt></ruby>の<ruby>牡<rt>か</rt></ruby><ruby>蠣<rt>き</rt></ruby>や<ruby>生<rt>なま</rt></ruby><ruby>肉<rt>にく</rt></ruby>は、<ruby>室<rt>しつ</rt>温<rt>おん</rt></ruby>で<ruby>保<rt>ほう</rt>管<rt>かん</rt></ruby>する。",
                    "<ruby>加<rt>か</rt>熱<rt>ねつ</rt></ruby>した<ruby>食<rt>しょく</rt>品<rt>ひん</rt></ruby>は、できるだけゆっくり<ruby>冷<rt>ひ</rt></ruby>やす。"
                ],
                answer: 0
            },
            {
                question: "多量の<ruby>微<rt>び</rt>生<rt>せい</rt></ruby><ruby>物<rt>ぶつ</rt></ruby>は何度で<ruby>急<rt>きゅう</rt></ruby>に<ruby>増<rt>ふ</rt></ruby>えますか。<ruby>正<rt>ただ</rt></ruby>しいものを<ruby>一<rt>ひと</rt></ruby>つ<ruby>選<rt>えら</rt></ruby>びなさい。",
                options: [
                    "30ºC-40ºC",
                    "60ºC-70ºC",
                    "0ºC-10ºC"
                ],
                answer: 0
            },
            {
                question: "多くの<ruby>微<rt>び</rt>生<rt>せい</rt></ruby><ruby>物<rt>ぶつ</rt></ruby>を<ruby>殺<rt>ころ</rt></ruby>すためには、何度で何<ruby>秒<rt>びょう</rt></ruby><ruby>間<rt>かん</rt></ruby><ruby>加<rt>か</rt>熱<rt>ねつ</rt></ruby>しますか。<ruby>正<rt>ただ</rt></ruby>しいものを<ruby>一<rt>ひと</rt></ruby>つ<ruby>選<rt>えら</rt></ruby>びなさい。",
                options: [
                    "75ºC-60<ruby>秒<rt>びょう</rt></ruby><ruby>間<rt>かん</rt></ruby>",
                    "45ºC-90<ruby>秒<rt>びょう</rt></ruby><ruby>間<rt>かん</rt></ruby>",
                    "55ºC-70<ruby>秒<rt>びょう</rt></ruby><ruby>間<rt>かん</rt></ruby>"
                ],
                answer: 0
            },
            {
                question: "<ruby>微<rt>び</rt>生<rt>せい</rt></ruby><ruby>物<rt>ぶつ</rt></ruby>を<ruby>殺<rt>ころ</rt></ruby>すために<ruby>食<rt>しょく</rt>品<rt>ひん</rt></ruby>を<ruby>加<rt>か</rt>熱<rt>ねつ</rt></ruby>するときに、<ruby>食<rt>しょく</rt>品<rt>ひん</rt></ruby>のどこの<ruby>温<rt>おん</rt>度<rt>ど</rt></ruby>を<ruby>測<rt>はか</rt></ruby>りますか。<ruby>正<rt>ただ</rt></ruby>しいものを<ruby>一<rt>ひと</rt></ruby>つ<ruby>選<rt>えら</rt></ruby>びなさい。",
                options: [
                    "<ruby>食<rt>しょく</rt>品<rt>ひん</rt></ruby>の<ruby>表<rt>ひょう</rt>面<rt>めん</rt></ruby>の<ruby>温<rt>おん</rt>度<rt>ど</rt></ruby>と<ruby>中<rt>ちゅう</rt>心<rt>しん</rt></ruby>の<ruby>温<rt>おん</rt>度<rt>ど</rt></ruby>の<ruby>平<rt>へい</rt>均<rt>きん</rt></ruby><ruby>値<rt>ち</rt></ruby>",
                    "<ruby>食<rt>しょく</rt>品<rt>ひん</rt></ruby>の<ruby>中<rt>ちゅう</rt>心<rt>しん</rt></ruby>の<ruby>温<rt>おん</rt>度<rt>ど</rt></ruby>",
                    "<ruby>食<rt>しょく</rt>品<rt>ひん</rt></ruby>の<ruby>表<rt>ひょう</rt>面<rt>めん</rt></ruby>の<ruby>温<rt>おん</rt>度<rt>ど</rt></ruby>"
                ],
                answer: 1
            },
            {
                question: "主に石やガラスを<ruby>検<rt>けん</rt>出<rt>しゅつ</rt></ruby>する<ruby>機<rt>き</rt>械<rt>かい</rt></ruby>の<ruby>名<rt>な</rt>前<rt>まえ</rt></ruby>は何ですか。<ruby>正<rt>ただ</rt></ruby>しいものを<ruby>一<rt>ひと</rt></ruby>つ<ruby>選<rt>えら</rt></ruby>びなさい。",
                options: [
                    "X<ruby>線<rt>せん</rt></ruby><ruby>異<rt>い</rt></ruby><ruby>物<rt>ぶつ</rt></ruby><ruby>検<rt>けん</rt>出<rt>しゅつ</rt></ruby><ruby>器<rt>き</rt></ruby>",
                    "<ruby>金<rt>きん</rt>属<rt>ぞく</rt></ruby><ruby>検<rt>けん</rt>出<rt>しゅつ</rt></ruby><ruby>器<rt>き</rt></ruby>",
                    "<ruby>自<rt>じ</rt>記<rt>き</rt></ruby><ruby>温<rt>おん</rt>度<rt>ど</rt></ruby><ruby>時<rt>とき</rt></ruby><ruby>計<rt>けい</rt></ruby>"
                ],
                answer: 0
            },
            {
                question: "<ruby>日<rt>に</rt>本<rt>ほん</rt></ruby>の<ruby>食<rt>しょく</rt>品<rt>ひん</rt></ruby><ruby>衛<rt>えい</rt>生<rt>せい</rt></ruby><ruby>法<rt>ほう</rt></ruby>では、<ruby>冷<rt>れい</rt>凍<rt>とう</rt></ruby><ruby>庫<rt>こ</rt></ruby>の<ruby>基<rt>き</rt>準<rt>じゅん</rt></ruby><ruby>温<rt>おん</rt>度<rt>ど</rt></ruby>は何度<ruby>以<rt>い</rt>か<rt>か</rt></ruby>ですか。<ruby>正<rt>ただ</rt></ruby>しいものを<ruby>一<rt>ひと</rt></ruby>つ<ruby>選<rt>えら</rt></ruby>びなさい。",
                options: [
                    "－15ºC <ruby>以<rt>い</rt>か<rt>か</rt></ruby>",
                    "－5ºC <ruby>以<rt>い</rt>か<rt>か</rt></ruby>",
                    "－10ºC <ruby>以<rt>い</rt>か<rt>か</rt></ruby>"
                ],
                answer: 0
            },
            {
                question: "<ruby>容<rt>よう</rt>器<rt>き</rt></ruby><ruby>包<rt>ほう</rt>装<rt>そう</rt></ruby>された<ruby>加<rt>か</rt>工<rt>こう</rt></ruby><ruby>食<rt>しょく</rt>品<rt>ひん</rt></ruby>で<ruby>表<rt>ひょう</rt>示<rt>じ</rt></ruby>しなければならないアレルギー<ruby>食<rt>しょく</rt>品<rt>ひん</rt></ruby>はどれですか。<ruby>正<rt>ただ</rt></ruby>しいものを<ruby>一<rt>ひと</rt></ruby>つ<ruby>選<rt>えら</rt></ruby>びなさい。",
                options: [
                    "<ruby>砂<rt>さ</rt>糖<rt>とう</rt></ruby>",
                    "トウモロコシ",
                    "<ruby>蕎<rt>そば</rt></ruby><ruby>麦<rt>むぎ</rt></ruby>"
                ],
                answer: 2
            },
            {
                question: "HACCPとは、<ruby>製<rt>せい</rt>品<rt>ひん</rt></ruby>の<ruby>安<rt>あん</rt>全<rt>ぜん</rt></ruby>のために、何をすることですか。<ruby>正<rt>ただ</rt></ruby>しいものを<ruby>一<rt>ひと</rt></ruby>つ<ruby>選<rt>えら</rt></ruby>びなさい。",
                options: [
                    "<ruby>原<rt>げん</rt>材<rt>ざい</rt></ruby><ruby>料<rt>りょう</rt></ruby>の<ruby>受<rt>う</rt></ruby>け<ruby>入<rt>い</rt></ruby>れを<ruby>集<rt>しゅう</rt>中<rt>ちゅう</rt></ruby><ruby>力<rt>りょく</rt></ruby>に<ruby>管<rt>かん</rt>理<rt>り</rt></ruby>する",
                    "<ruby>完<rt>かん</rt>成<rt>せい</rt></ruby>した<ruby>製<rt>せい</rt>品<rt>ひん</rt></ruby>を<ruby>検<rt>けん</rt>査<rt>さ</rt></ruby>する",
                    "<ruby>危<rt>き</rt>険<rt>けん</rt></ruby><ruby>要<rt>よう</rt>因<rt>いん</rt></ruby>を<ruby>明<rt>めい</rt>確<rt>かく</rt></ruby>にして<ruby>重<rt>じゅう</rt>要<rt>よう</rt></ruby><ruby>点<rt>てん</rt></ruby>を<ruby>管<rt>かん</rt>理<rt>り</rt></ruby>する"
                ],
                answer: 2
            },
            {
                question: "<ruby>働<rt>はたら</rt></ruby>く<ruby>経<rt>けい</rt>験<rt>けん</rt></ruby>が<ruby>長<rt>なが</rt></ruby>い<ruby>人<rt>ひと</rt></ruby>よりも、<ruby>働<rt>はたら</rt></ruby>く<ruby>経<rt>けい</rt>験<rt>けん</rt></ruby>が<ruby>少<rt>すく</rt></ruby>ない<ruby>人<rt>ひと</rt></ruby>のほうが<ruby>労<rt>ろう</rt>働<rt>どう</rt></ruby><ruby>災<rt>さい</rt>害<rt>がい</rt></ruby>が多い<ruby>理<rt>り</rt>由<rt>ゆう</rt></ruby>は何ですか。<ruby>正<rt>ただ</rt></ruby>しいものを<ruby>一<rt>ひと</rt></ruby>つ<ruby>選<rt>えら</rt></ruby>びなさい。",
                options: [
                    "<ruby>危<rt>き</rt>険<rt>けん</rt></ruby>な<ruby>作<rt>さ</rt>業<rt>ぎょう</rt></ruby>を<ruby>担<rt>たん</rt>当<rt>とう</rt></ruby>することが多い",
                    "<ruby>作<rt>さ</rt>業<rt>ぎょう</rt></ruby>に<ruby>慣<rt>な</rt></ruby>れていないため、<ruby>危<rt>き</rt>険<rt>けん</rt></ruby>に<ruby>気<rt>き</rt></ruby>付<rt>づ</rt></ruby>きにくい",
                    "<ruby>年<rt>ねん</rt>齢<rt>れい</rt></ruby>が<ruby>若<rt>わか</rt></ruby>く、<ruby>作<rt>さ</rt>業<rt>ぎょう</rt></ruby><ruby>時<rt>じ</rt>間<rt>かん</rt></ruby>が<ruby>長<rt>なが</rt></ruby>い<ruby>人<rt>ひと</rt></ruby>が多い"
                ],
                answer: 1
            },
            {
                question: "<ruby>作<rt>さ</rt>業<rt>ぎょう</rt></ruby><ruby>服<rt>ふく</rt></ruby>のどのような<ruby>点<rt>てん</rt></ruby>に<ruby>注<rt>ちゅう</rt>意<rt>い</rt></ruby>が<ruby>必<rt>ひつ</rt>要<rt>よう</rt></ruby>ですか。<ruby>間<rt>ま</rt>違<rt>ちが</rt></ruby>っているものを<ruby>一<rt>ひと</rt></ruby>つ<ruby>選<rt>えら</rt></ruby>びなさい。",
                options: [
                    "ロッカーの<ruby>中<rt>なか</rt></ruby>で、<ruby>汚<rt>よご</rt></ruby>れた<ruby>作<rt>さ</rt>業<rt>ぎょう</rt></ruby><ruby>服<rt>ふく</rt></ruby>やきれいな<ruby>作<rt>さ</rt>業<rt>ぎょう</rt></ruby><ruby>服<rt>ふく</rt></ruby>がくっつかないようにする",
                    "ポケットやボタンのある<ruby>作<rt>さ</rt>業<rt>ぎょう</rt></ruby><ruby>服<rt>ふく</rt></ruby>を<ruby>着<rt>き</rt></ruby>る",
                    "<ruby>作<rt>さ</rt>業<rt>ぎょう</rt></ruby><ruby>服<rt>ふく</rt></ruby>の<ruby>袖<rt>そで</rt>口<rt>ぐち</rt></ruby>は、<ruby>絞<rt>しぼ</rt></ruby>ったものをつかう"
                ],
                answer: 1
            },
            {
                question: "<ruby>作<rt>さ</rt>業<rt>ぎょう</rt></ruby><ruby>場<rt>ば</rt></ruby>に<ruby>入<rt>い</rt></ruby>る<ruby>前<rt>まえ</rt></ruby>に、どんなことに<ruby>注<rt>ちゅう</rt>意<rt>い</rt></ruby>しますか。<ruby>間<rt>ま</rt>違<rt>ちが</rt></ruby>っているものを<ruby>一<rt>ひと</rt></ruby>つ<ruby>選<rt>えら</rt></ruby>びなさい。",
                options: [
                    "トイレの<ruby>後<rt>あと</rt></ruby><ruby>手<rt>て</rt></ruby><ruby>洗<rt>あら</rt></ruby>いでは、<ruby>石<rt>せっ</rt>鹸<rt>けん</rt></ruby>だけ<ruby>使<rt>つか</rt></ruby>う",
                    "<ruby>清<rt>せい</rt>潔<rt>けつ</rt></ruby>かどうか<ruby>確<rt>かく</rt>認<rt>にん</rt></ruby>してから<ruby>作<rt>さ</rt>業<rt>ぎょう</rt></ruby><ruby>服<rt>ふく</rt></ruby>を<ruby>着<rt>き</rt></ruby>る",
                    "<ruby>汚<rt>お</rt></ruby><ruby>染<rt>せん</rt></ruby><ruby>区<rt>く</rt></ruby>から<ruby>非<rt>ひ</rt></ruby><ruby>汚<rt>お</rt></ruby><ruby>染<rt>せん</rt></ruby><ruby>区<rt>く</rt></ruby>に<ruby>入<rt>い</rt></ruby>る<ruby>時<rt>とき</rt></ruby>は、<ruby>作<rt>さ</rt>業<rt>ぎょう</rt></ruby><ruby>靴<rt>ぐつ</rt></ruby>を<ruby>消<rt>しょう</rt>毒<rt>どく</rt></ruby>する"
                ],
                answer: 0
            },
            {
                question: "<ruby>作<rt>さ</rt>業<rt>ぎょう</rt></ruby><ruby>中<rt>ちゅう</rt></ruby>の<ruby>行<rt>こう</rt>動<rt>どう</rt></ruby>について、<ruby>間<rt>ま</rt>違<rt>ちが</rt></ruby>っているものを<ruby>一<rt>ひと</rt></ruby>つ<ruby>選<rt>えら</rt></ruby>びなさい。",
                options: [
                    "<ruby>危<rt>き</rt>険<rt>けん</rt></ruby>な<ruby>作<rt>さ</rt>業<rt>ぎょう</rt></ruby>をしている<ruby>人<rt>ひと</rt></ruby>を<ruby>見<rt>み</rt></ruby>たら、すぐ<ruby>声<rt>こえ</rt></ruby>をかける",
                    "<ruby>危<rt>き</rt>険<rt>けん</rt></ruby>な<ruby>場<rt>ば</rt></ruby><ruby>所<rt>しょ</rt></ruby>を<ruby>見<rt>み</rt></ruby>つけたら、<ruby>責<rt>せき</rt>任<rt>にん</rt></ruby><ruby>者<rt>しゃ</rt></ruby>にすぐ<ruby>報<rt>ほう</rt>告<rt>こく</rt></ruby>する",
                    "<ruby>作<rt>さ</rt>業<rt>ぎょう</rt></ruby>を<ruby>離<rt>はな</rt></ruby>れる<ruby>時<rt>じ</rt>間<rt>かん</rt></ruby>が<ruby>短<rt>みじか</rt></ruby>い<ruby>時<rt>とき</rt></ruby>は、<ruby>黙<rt>だま</rt></ruby>って<ruby>離<rt>はな</rt></ruby>れてもいい"
                ],
                answer: 2
            },
            {
                question: "<ruby>製<rt>せい</rt>品<rt>ひん</rt></ruby>の<ruby>微<rt>び</rt>生<rt>せい</rt></ruby><ruby>物<rt>ぶつ</rt></ruby><ruby>検<rt>けん</rt>査<rt>さ</rt></ruby>について、<ruby>間<rt>ま</rt>違<rt>ちが</rt></ruby>っているものを<ruby>一<rt>ひと</rt></ruby>つ<ruby>選<rt>えら</rt></ruby>びなさい。",
                options: [
                    "カンピロバクター<ruby>属<rt>ぞく</rt></ruby><ruby>菌<rt>きん</rt></ruby>の<ruby>検<rt>けん</rt>査<rt>さ</rt></ruby>は、<ruby>日<rt>に</rt>本<rt>ほん</rt></ruby>では<ruby>法<rt>ほう</rt>律<rt>りつ</rt></ruby>で<ruby>禁<rt>きん</rt>止<rt>し</rt></ruby>されている",
                    "<ruby>法<rt>ほう</rt>律<rt>りつ</rt></ruby>で<ruby>決<rt>き</rt></ruby>められた<ruby>検<rt>けん</rt>査<rt>さ</rt></ruby><ruby>項<rt>こう</rt>目<rt>もく</rt></ruby>があれば、それに<ruby>従<rt>したが</rt></ruby>って<ruby>検<rt>けん</rt>査<rt>さ</rt></ruby>する",
                    "<ruby>一<rt>いっ</rt>般<rt>ぱん</rt></ruby><ruby>的<rt>てき</rt></ruby>な<ruby>検<rt>けん</rt>査<rt>さ</rt></ruby><ruby>項<rt>こう</rt>目<rt>もく</rt></ruby>は、<ruby>一<rt>いっ</rt>般<rt>ぱん</rt></ruby><ruby>生<rt>せい</rt></ruby><ruby>菌<rt>きん</rt></ruby><ruby>数<rt>すう</rt></ruby>、<ruby>大<rt>だい</rt></ruby><ruby>腸<rt>ちょう</rt></ruby><ruby>菌<rt>きん</rt></ruby>、<ruby>大<rt>だい</rt></ruby><ruby>腸<rt>ちょう</rt></ruby><ruby>菌<rt>きん</rt></ruby><ruby>群<rt>ぐん</rt></ruby><ruby>菌<rt>きん</rt></ruby>などある"
                ],
                answer: 0
            },
            {
                question: "<ruby>危<rt>き</rt>害<rt>がい</rt></ruby><ruby>要<rt>よう</rt></ruby><ruby>因<rt>いん</rt></ruby><ruby>分<rt>ぶん</rt></ruby><ruby>析<rt>せき</rt></ruby>について、<ruby>間<rt>ま</rt>違<rt>ちが</rt></ruby>っているものを<ruby>一<rt>ひと</rt></ruby>つ<ruby>選<rt>えら</rt></ruby>びなさい。",
                options: [
                    "<ruby>危<rt>き</rt>害<rt>がい</rt></ruby>の<ruby>要<rt>よう</rt></ruby><ruby>因<rt>いん</rt></ruby>を、<ruby>全<rt>ぜん</rt>部<rt>ぶ</rt></ruby><ruby>書<rt>か</rt></ruby>いて、はっきりわかるようにする",
                    "<ruby>危<rt>き</rt>害<rt>がい</rt></ruby><ruby>要<rt>よう</rt></ruby><ruby>因<rt>いん</rt></ruby><ruby>分<rt>ぶん</rt></ruby><ruby>析<rt>せき</rt></ruby>をするだけで、かならず<ruby>危<rt>き</rt>害<rt>がい</rt></ruby>が<ruby>起<rt>お</rt></ruby>きない",
                    "<ruby>危<rt>き</rt>害<rt>がい</rt></ruby><ruby>要<rt>よう</rt></ruby><ruby>因<rt>いん</rt></ruby><ruby>分<rt>ぶん</rt></ruby><ruby>析<rt>せき</rt></ruby>をするときは、今まで<ruby>検<rt>けん</rt>査<rt>さ</rt></ruby><ruby>記<rt>き</rt>録<rt>ろく</rt></ruby>や<ruby>関<rt>かん</rt>連<rt>れん</rt></ruby>のある<ruby>本<rt>ほん</rt></ruby>なども<ruby>見<rt>み</rt></ruby>ている"
                ],
                answer: 1
            },
            {
                question: "アレルギー<ruby>食<rt>しょく</rt>品<rt>ひん</rt></ruby>がほかの<ruby>食<rt>しょく</rt>品<rt>ひん</rt></ruby>に<ruby>混<rt>ま</rt></ruby>ざってしまうことを「<ruby>交<rt>こう</rt>差<rt>さ</rt></ruby><ruby>汚<rt>お</rt></ruby><ruby>染<rt>せん</rt></ruby>」といいます。「<ruby>交<rt>こう</rt>差<rt>さ</rt></ruby><ruby>汚<rt>お</rt></ruby><ruby>染<rt>せん</rt></ruby>」を<ruby>防<rt>ふせ</rt></ruby>ぐために、何をしますか。<ruby>間<rt>ま</rt>違<rt>ちが</rt></ruby>っているものを<ruby>一<rt>ひと</rt></ruby>つ<ruby>選<rt>えら</rt></ruby>びなさい。",
                options: [
                    "アレルギー<ruby>食<rt>しょく</rt>品<rt>ひん</rt></ruby>を<ruby>含<rt>ふく</rt></ruby>む<ruby>原<rt>げん</rt>材<rt>ざい</rt></ruby><ruby>料<rt>りょう</rt></ruby>と<ruby>含<rt>ふく</rt></ruby>まない<ruby>原<rt>げん</rt>材<rt>ざい</rt></ruby><ruby>料<rt>りょう</rt></ruby>を<ruby>同<rt>おな</rt></ruby>じラインで<ruby>製<rt>せい</rt>造<rt>ぞう</rt></ruby>する<ruby>場<rt>ば</rt>合<rt>あい</rt></ruby>、<ruby>徹<rt>てっ</rt>底<rt>てい</rt></ruby><ruby>的<rt>てき</rt></ruby>に<ruby>洗<rt>せん</rt>浄<rt>じょう</rt></ruby>する",
                    "<ruby>特<rt>とく</rt>定<rt>てい</rt></ruby><ruby>原<rt>げん</rt>材<rt>ざい</rt></ruby><ruby>料<rt>りょう</rt></ruby>を<ruby>含<rt>ふく</rt></ruby>む<ruby>製<rt>せい</rt>品<rt>ひん</rt></ruby>は、一<ruby>日<rt>にち</rt></ruby>の<ruby>作<rt>さ</rt>業<rt>ぎょう</rt></ruby>の<ruby>最<rt>さい</rt></ruby><ruby>初<rt>しょ</rt></ruby>に<ruby>製<rt>せい</rt>造<rt>ぞう</rt></ruby>する",
                    "アレルギー<ruby>食<rt>しょく</rt>品<rt>ひん</rt></ruby>を<ruby>含<rt>ふく</rt></ruby>む<ruby>原<rt>げん</rt>材<rt>ざい</rt></ruby><ruby>料<rt>りょう</rt></ruby>と、<ruby>含<rt>ふく</rt></ruby>まない<ruby>原<rt>げん</rt>材<rt>ざい</rt></ruby><ruby>料<rt>りょう</rt></ruby>を、<ruby>別<rt>べつ</rt></ruby>に<ruby>保<rt>ほう</rt>管<rt>かん</rt></ruby>する"
                ],
                answer: 0
            },
            {
                question: "HACCPの「7<ruby>原<rt>げん</rt>則<rt>そく</rt></ruby>」には、どんな<ruby>項<rt>こう</rt>目<rt>もく</rt></ruby>がありますか。<ruby>間<rt>ま</rt>違<rt>ちが</rt></ruby>っているものを<ruby>一<rt>ひと</rt></ruby>つ<ruby>選<rt>えら</rt></ruby>びなさい。",
                options: [
                    "<ruby>検<rt>けん</rt>証<rt>しょう</rt></ruby><ruby>方<rt>ほう</rt>法<rt>ほう</rt></ruby>の<ruby>設<rt>せっ</rt>定<rt>てい</rt></ruby>",
                    "モニタリング<ruby>方<rt>ほう</rt>法<rt>ほう</rt></ruby>の<ruby>設<rt>せっ</rt>定<rt>てい</rt></ruby>",
                    "<ruby>施<rt>し</rt>設<rt>せつ</rt></ruby><ruby>基<rt>き</rt>準<rt>じゅん</rt></ruby>の<ruby>設<rt>せっ</rt>定<rt>てい</rt></ruby>"
                ],
                answer: 2
            },
            {
                question: "「<ruby>危<rt>き</rt>険<rt>けん</rt></ruby><ruby>異<rt>い</rt></ruby><ruby>物<rt>ぶつ</rt></ruby>」にはどんなものがありますか。<ruby>間<rt>ま</rt>違<rt>ちが</rt></ruby>っているものを<ruby>一<rt>ひと</rt></ruby>つ<ruby>選<rt>えら</rt></ruby>びなさい。",
                options: [
                    "<ruby>髪<rt>かみ</rt></ruby>の<ruby>毛<rt>け</rt></ruby>",
                    "石",
                    "ガラス"
                ],
                answer: 0
            },
            {
                question: "<ruby>保<rt>ほ</rt>護<rt>ご</rt></ruby><ruby>帽<rt>ぼう</rt></ruby>（ヘルメットなど）や<ruby>耳<rt>みみ</rt></ruby><ruby>栓<rt>せん</rt></ruby>、<ruby>安<rt>あん</rt>全<rt>ぜん</rt></ruby><ruby>靴<rt>ぐつ</rt></ruby>などは、<ruby>体<rt>からだ</rt></ruby>を<ruby>守<rt>まも</rt></ruby>る<ruby>保<rt>ほ</rt>護<rt>ご</rt></ruby><ruby>具<rt>ぐ</rt></ruby>と呼ばれます。<ruby>保<rt>ほ</rt>護<rt>ご</rt></ruby><ruby>具<rt>ぐ</rt></ruby>について、<ruby>間<rt>ま</rt>違<rt>ちが</rt></ruby>っているものを<ruby>一<rt>ひと</rt></ruby>つ<ruby>選<rt>えら</rt></ruby>びなさい。",
                options: [
                    "<ruby>安<rt>あん</rt>全<rt>ぜん</rt></ruby><ruby>靴<rt>ぐつ</rt></ruby>の<ruby>中<rt>なか</rt></ruby>に<ruby>空<rt>くう</rt>気<rt>き</rt></ruby>を入るため、<ruby>爪<rt>つま</rt>先<rt>さき</rt></ruby>に<ruby>小<rt>ちい</rt></ruby>さな<ruby>穴<rt>あな</rt></ruby>をあけておく",
                    "<ruby>化<rt>か</rt>学<rt>がく</rt></ruby><ruby>物<rt>ぶつ</rt></ruby><ruby>質<rt>しつ</rt></ruby>や<ruby>薬<rt>やく</rt><rt>ざい</rt></ruby>を使う時は、<ruby>保<rt>ほ</rt>護<rt>ご</rt></ruby>メガネや<ruby>手<rt>て</rt></ruby><ruby>袋<rt>ぶくろ</rt></ruby>をつける",
                    "<ruby>保<rt>ほ</rt>護<rt>ご</rt></ruby><ruby>帽<rt>ぼう</rt></ruby>をかぶる<ruby>前<rt>まえ</rt></ruby>に、<ruby>傷<rt>きず</rt></ruby>がないかをチェックする"
                ],
                answer: 0
            },
            {
                question: "<ruby>温<rt>おん</rt>度<rt>ど</rt></ruby>と<ruby>湿<rt>しつ</rt>度<rt>ど</rt></ruby>が高いところでは「<ruby>熱<rt>ねっ</rt>中<rt>ちゅう</rt></ruby><ruby>症<rt>しょう</rt></ruby>」の<ruby>危<rt>き</rt>険<rt>けん</rt></ruby>があります。<ruby>熱<rt>ねっ</rt>中<rt>ちゅう</rt></ruby><ruby>症<rt>しょう</rt></ruby>を<ruby>予<rt>よ</rt>防<rt>ぼう</rt></ruby>するために何をするとよいですか。<ruby>間<rt>ま</rt>違<rt>ちが</rt></ruby>っているものを<ruby>一<rt>ひと</rt></ruby>つ<ruby>選<rt>えら</rt></ruby>びなさい。",
                options: [
                    "こまめに<ruby>休<rt>きゅう</rt>憩<rt>けい</rt></ruby>をして、<ruby>水<rt>すい</rt>分<rt>ぶん</rt></ruby><ruby>補<rt>ほ</rt>給<rt>きゅう</rt></ruby>する",
                    "<ruby>空<rt>くう</rt>気<rt>き</rt></ruby>を<ruby>通<rt>とお</rt></ruby>して、<ruby>汗<rt>あせ</rt></ruby>や<ruby>水<rt>すい</rt>分<rt>ぶん</rt></ruby>を<ruby>吸<rt>す</rt></ruby>って、<ruby>乾<rt>かわ</rt></ruby>きやすい<ruby>衣<rt>い</rt>服<rt>ふく</rt></ruby>を<ruby>着<rt>き</rt></ruby>る",
                    "ストレッチを<ruby>中<rt>ちゅう</rt>心<rt>しん</rt></ruby>とした<ruby>予<rt>よ</rt>防<rt>ぼう</rt></ruby><ruby>体<rt>たい</rt>操<rt>そう</rt></ruby>をする"
                ],
                answer: 2
            },
            {
                question: "<ruby>機<rt>き</rt>械<rt>かい</rt></ruby><ruby>清<rt>せい</rt>掃<rt>そう</rt></ruby>のやり方について、<ruby>間<rt>ま</rt>違<rt>ちが</rt></ruby>っているものを<ruby>一<rt>ひと</rt></ruby>つ<ruby>選<rt>えら</rt></ruby>びなさい。",
                options: [
                    "<ruby>機<rt>き</rt>械<rt>かい</rt></ruby>を<ruby>洗<rt>あら</rt></ruby>う時は、<ruby>水<rt>みず</rt></ruby>で<ruby>流<rt>なが</rt></ruby>すだけで<ruby>良<rt>よ</rt></ruby>い",
                    "<ruby>機<rt>き</rt>械<rt>かい</rt></ruby>の<ruby>取<rt>と</rt>り<ruby>外<rt>はず</rt></ruby>せるところは、<ruby>外<rt>はず</rt></ruby>して<ruby>清<rt>せい</rt>掃<rt>そう</rt></ruby>する",
                    "<ruby>清<rt>せい</rt>掃<rt>そう</rt></ruby>する時は、<ruby>機<rt>き</rt>械<rt>かい</rt></ruby>を<ruby>止<rt>と</rt></ruby>める"
                ],
                answer: 0
            },
            {
                question: "<ruby>異<rt>い</rt>常<rt>じょう</rt></ruby><ruby>事<rt>じ</rt>態<rt>たい</rt></ruby>が起きた時に、どうしますか。<ruby>間<rt>ま</rt>違<rt>ちが</rt></ruby>っているものを<ruby>一<rt>ひと</rt></ruby>つ<ruby>選<rt>えら</rt></ruby>びなさい。",
                options: [
                    "<ruby>誰<rt>だれ</rt></ruby>でも<ruby>相<rt>そう</rt>談<rt>だん</rt></ruby>しないで<ruby>作<rt>さ</rt>業<rt>ぎょう</rt></ruby><ruby>場<rt>ば</rt></ruby>を<ruby>離<rt>はな</rt></ruby>れて、<ruby>安<rt>あん</rt>全<rt>ぜん</rt></ruby>な<ruby>場<rt>ば</rt></ruby><ruby>所<rt>しょ</rt></ruby>へ<ruby>避<rt>ひ</rt>難<rt>なん</rt></ruby>する",
                    "<ruby>周<rt>まわ</rt></ruby>りにいる<ruby>責<rt>せき</rt>任<rt>にん</rt></ruby><ruby>者<rt>しゃ</rt></ruby>や<ruby>同<rt>どう</rt>僚<rt>りょう</rt></ruby>に、大<ruby>声<rt>こえ</rt></ruby>で知らせる",
                    "<ruby>必<rt>ひつ</rt>要<rt>よう</rt></ruby>があれば、<ruby>非<rt>ひ</rt>常<rt>じょう</rt></ruby><ruby>停<rt>てい</rt>止<rt>し</rt></ruby>ボタンで<ruby>機<rt>き</rt>械<rt>かい</rt></ruby>を<ruby>止<rt>と</rt></ruby>める"
                ],
                answer: 0
            },
            {
                question: "<ruby>作<rt>さ</rt>業<rt>ぎょう</rt></ruby><ruby>場<rt>ば</rt></ruby>に<ruby>入<rt>い</rt></ruby>る時に、<ruby>粘<rt>ねん</rt>着<rt>ちゃく</rt></ruby>ローラーを使っています。何のために<ruby>粘<rt>ねん</rt>着<rt>ちゃく</rt></ruby>ローラーを使いますか。<ruby>正<rt>ただ</rt></ruby>しいものを<ruby>一<rt>ひと</rt></ruby>つ<ruby>選<rt>えら</rt></ruby>びなさい。",
                options: [
                    "ほこりを<ruby>落<rt>お</rt></ruby>とす",
                    "マッサージをする",
                    "<ruby>作<rt>さ</rt>業<rt>ぎょう</rt></ruby><ruby>服<rt>ふく</rt></ruby>を<ruby>冷<rt>ひ</rt></ruby>やす"
                ],
                answer: 0
            },
            {
                question: "<ruby>手<rt>て</rt></ruby><ruby>洗<rt>あら</rt></ruby>いの<ruby>手<rt>て</rt></ruby><ruby>順<rt>じゅん</rt></ruby>について、下のには何が入りますか。<ruby>正<rt>ただ</rt></ruby>しいものを<ruby>一<rt>ひと</rt></ruby>つ<ruby>選<rt>えら</rt></ruby>びなさい。",
                options: [
                    "<ruby>消<rt>しょう</rt>毒<rt>どく</rt></ruby>（<ruby>消<rt>しょう</rt>毒<rt>どく</rt></ruby><ruby>液<rt>えき</rt></ruby>を使う）",
                    "<ruby>保<rt>ほ</rt>湿<rt>しつ</rt></ruby>（クリームを<ruby>塗<rt>ぬ</rt></ruby>る）",
                    "<ruby>乾<rt>かん</rt>燥<rt>そう</rt></ruby>（ドライヤーを使う）"
                ],
                answer: 0
            },
            {
                question: "<ruby>脚<rt>きゃ</rt>立<rt>たつ</rt></ruby>に<ruby>乗<rt>の</rt></ruby>り<ruby>天<rt>てん</rt>井<rt>じょう</rt></ruby><ruby>近<rt>ちか</rt></ruby>くのボルトを<ruby>締<rt>し</rt></ruby>めたとき、<ruby>脚<rt>きゃ</rt>立<rt>たつ</rt></ruby>から<ruby>落<rt>お</rt></ruby>ちそうになった。この<ruby>事<rt>じ</rt>故<rt>こ</rt></ruby>を<ruby>防<rt>ふせ</rt></ruby>ぐために、どうしたらいいですか。<ruby>間<rt>ま</rt>違<rt>ちが</rt></ruby>っているものを<ruby>一<rt>ひと</rt></ruby>つ<ruby>選<rt>えら</rt></ruby>びなさい。",
                image: "images/kecelakaan_腳立.png",
                options: [
                    "<ruby>作<rt>さ</rt>業<rt>ぎょう</rt></ruby><ruby>開<rt>かい</rt>始<rt>し</rt></ruby><ruby>前<rt>まえ</rt></ruby>に、レンチにすり<ruby>減<rt>へ</rt></ruby>りなどの<ruby>故<rt>こ</rt>障<rt>しょう</rt></ruby>がないか<ruby>確<rt>かく</rt>認<rt>にん</rt></ruby>すること",
                    "レンチでボルトを<ruby>締<rt>し</rt></ruby>めるときの<ruby>作<rt>さ</rt>業<rt>ぎょう</rt></ruby><ruby>位<rt>い</rt>置<rt>ち</rt></ruby>は、<ruby>安<rt>あん</rt>定<rt>てい</rt></ruby>な<ruby>姿<rt>し</rt>勢<rt>せい</rt></ruby>を<ruby>避<rt>さ</rt></ruby>けること",
                    "<ruby>脚<rt>きゃ</rt>立<rt>たつ</rt></ruby>の<ruby>天<rt>てん</rt>板<rt>ばん</rt></ruby>には<ruby>立<rt>た</rt></ruby>てないこと"
                ],
                answer: 1
            },
            {
                question: "フレコンバッグをクレーンで<ruby>釣<rt>つ</rt>り<ruby>上<rt>あ</rt></ruby>げ、<ruby>荷<rt>に</rt>台<rt>だい</rt></ruby>から<ruby>降<rt>お</rt></ruby>ろそうとしたときにフレコンバッグが<ruby>揺<rt>ゆ</rt></ruby>れて<ruby>身<rt>しん</rt>体<rt>たい</rt></ruby>に<ruby>当<rt>あ</rt></ruby>たり、<ruby>荷<rt>に</rt>台<rt>だい</rt></ruby>から<ruby>落<rt>お</rt></ruby>ちそうになった。この<ruby>事<rt>じ</rt>故<rt>こ</rt></ruby>の<ruby>原<rt>げん</rt>因<rt>いん</rt></ruby>は何ですか。<ruby>最<rt>もっとも</rt></ruby><ruby>正<rt>ただ</rt></ruby>しいものを<ruby>一<rt>ひと</rt></ruby>つ<ruby>選<rt>えら</rt></ruby>びなさい。",
                image: "images/kecelakaan_クレーン.png",
                options: [
                    "クレーンを使う時の<ruby>自<rt>じ</rt>分<rt>ぶん</rt></ruby>の<ruby>立<rt>た</rt></ruby>つ<ruby>場<rt>ば</rt></ruby><ruby>所<rt>しょ</rt></ruby>を<ruby>十<rt>じゅう</rt>分<rt>ぶん</rt></ruby><ruby>理<rt>り</rt>解<rt>かい</rt></ruby>していなかったこと",
                    "クレーンを使う時、フレコンバッグに<ruby>気<rt>き</rt></ruby><ruby>付<rt>づ</rt></ruby>きましたこと",
                    "フレコンバッグをつり上げる<ruby>際<rt>さい</rt></ruby>、クレーンのワイヤーが<ruby>切<rt>き</rt></ruby>れていたこと"
                ],
                answer: 0
            },
            {
                question: "<ruby>濃<rt>のう</rt>度<rt>ど</rt></ruby>10％の<ruby>次<rt>じ</rt>亜<rt>あ</rt>塩<rt>えん</rt></ruby><ruby>素<rt>そ</rt></ruby><ruby>酸<rt>さん</rt></ruby>ナトリウム（NaClO）<ruby>溶<rt>よう</rt></ruby><ruby>液<rt>えき</rt></ruby>があります。400ppmの<ruby>次<rt>じ</rt>亜<rt>あ</rt>塩<rt>えん</rt></ruby><ruby>素<rt>そ</rt></ruby><ruby>酸<rt>さん</rt></ruby>ナトリウム（NaClO）<ruby>溶<rt>よう</rt></ruby><ruby>液<rt>えき</rt></ruby>を1L<ruby>作<rt>つく</rt></ruby>る時に、この<ruby>溶<rt>よう</rt></ruby><ruby>液<rt>えき</rt></ruby>と<ruby>水<rt>みず</rt></ruby>はそれぞれ何ml<ruby>必<rt>ひつ</rt>要<rt>よう</rt></ruby>ですか。<ruby>正<rt>ただ</rt></ruby>しいものを<ruby>一<rt>ひと</rt></ruby>つ<ruby>選<rt>えら</rt></ruby>びなさい。",
                options: [
                    "<ruby>溶<rt>よう</rt></ruby><ruby>液<rt>えき</rt></ruby>4㎖、<ruby>水<rt>みず</rt></ruby>996㎖",
                    "<ruby>溶<rt>よう</rt></ruby><ruby>液<rt>えき</rt></ruby>4㎖、<ruby>水<rt>みず</rt></ruby>1000㎖",
                    "<ruby>溶<rt>よう</rt></ruby><ruby>液<rt>えき</rt></ruby>2㎖、<ruby>水<rt>みず</rt></ruby>998㎖"
                ],
                answer: 0
            },
            {
                question: "以下は450ｇのうどんの<ruby>配<rt>はい</rt>合<rt>ごう</rt></ruby>です。同じ<ruby>配<rt>はい</rt>合<rt>ごう</rt></ruby>で<ruby>作<rt>つく</rt></ruby>る時に、<ruby>小<rt>こ</rt></ruby><ruby>麦<rt>むぎ</rt></ruby><ruby>粉<rt>こ</rt></ruby>10㎏あれば、うどんは何㎏できますか。<ruby>正<rt>ただ</rt></ruby>しいものを<ruby>一<rt>ひと</rt></ruby>つ<ruby>選<rt>えら</rt></ruby>びなさい。（<ruby>原<rt>げん</rt>料<rt>りょう</rt></ruby>：<ruby>量<rt>りょう</rt></ruby>） <ruby>小<rt>こ</rt></ruby><ruby>麦<rt>むぎ</rt></ruby><ruby>粉<rt>こ</rt></ruby>：300g、<ruby>食<rt>しょく</rt></ruby><ruby>塩<rt>えん</rt></ruby>：15g、<ruby>水<rt>みず</rt></ruby>：135g",
                options: [
                    "16 ㎏",
                    "15 ㎏",
                    "17 ㎏"
                ],
                answer: 1
            },
            {
                question: "<ruby>動<rt>うご</rt></ruby>いているベルトコンベアを<ruby>清<rt>せい</rt>掃<rt>そう</rt></ruby>していた時に、ぞうきんがベルトに<ruby>引<rt>ひ</rt></ruby>っかかって、<ruby>手<rt>て</rt></ruby>が<ruby>機<rt>き</rt>械<rt>かい</rt></ruby>に<ruby>巻<rt>ま</rt>き<ruby>込<rt>こ</rt></ruby>まれそうになりました。この<ruby>事<rt>じ</rt>故<rt>こ</rt></ruby>を<ruby>防<rt>ふせ</rt></ruby>ぐために、どうしたらいいですか。<ruby>正<rt>ただ</rt></ruby>しいものを<ruby>一<rt>ひと</rt></ruby>つ<ruby>選<rt>えら</rt></ruby>びなさい。",
                image: "images/kecelakaan_ベルト.png",
                options: [
                    "近くでほかの人が見ている時に清掃する",
                    "ぞうきんを使わずに清掃する",
                    "機械を止めてから清掃する"
                ],
                answer: 2
            },
            {
                question: "<ruby>冷<rt>れい</rt></ruby><ruby>凍<rt>とう</rt></ruby><ruby>庫<rt>こ</rt></ruby>の中で<ruby>作<rt>さ</rt>業<rt>ぎょう</rt></ruby>をしていた時、<ruby>床<rt>ゆか</rt></ruby>の<ruby>霜<rt>しも</rt></ruby>のために<ruby>足<rt>あし</rt></ruby>が<ruby>滑<rt>すべ</rt></ruby>って<ruby>転<rt>てん</rt></ruby><ruby>倒<rt>とう</rt></ruby>しました。この<ruby>事<rt>じ</rt>故<rt>こ</rt></ruby>を<ruby>防<rt>ふせ</rt></ruby>ぐために、どうしたらいいですか。<ruby>正<rt>ただ</rt></ruby>しいものを<ruby>一<rt>ひと</rt></ruby>つ<ruby>選<rt>えら</rt></ruby>びなさい。",
                image: "images/kecelakaan_冷凍庫.png",
                options: [
                    "<ruby>滑<rt>すべ</rt></ruby>りにくい<ruby>靴<rt>くつ</rt></ruby>を<ruby>履<rt>は</rt></ruby>いて、<ruby>床<rt>ゆか</rt></ruby>の<ruby>霜<rt>しも</rt></ruby>や<ruby>水<rt>みず</rt></ruby><ruby>濡<rt>ぬ</rt></ruby>れに<ruby>注<rt>ちゅう</rt>意<rt>い</rt></ruby>する",
                    "<ruby>冷<rt>れい</rt></ruby><ruby>凍<rt>とう</rt></ruby><ruby>庫<rt>こ</rt></ruby>の<ruby>温<rt>おん</rt>度<rt>ど</rt></ruby>を<ruby>上<rt>あ</rt></ruby>げて、<ruby>床<rt>ゆか</rt></ruby>の<ruby>霜<rt>しも</rt></ruby>を<ruby>取<rt>と</rt></ruby>る",
                    "<ruby>霜<rt>しも</rt></ruby>や<ruby>水<rt>みず</rt></ruby><ruby>濡<rt>ぬ</rt></ruby>れを<ruby>踏<rt>ふ</rt></ruby>んで<ruby>滑<rt>すべ</rt></ruby>らないよう、大<ruby>股<rt>おおまた</rt></ruby>で<ruby>歩<rt>ある</rt></ruby>く"
                ],
                answer: 0
            },
            {
                question: "<ruby>機<rt>き</rt>械<rt>かい</rt></ruby>の<ruby>反<rt>はん</rt>対<rt>たい</rt></ruby><ruby>側<rt>がわ</rt></ruby>に行こうとして、ローラーコンベアの<ruby>上<rt>うえ</rt></ruby>にに<ruby>乗<rt>の</rt></ruby>ったために、転んでけがをしました。この<ruby>事<rt>じ</rt>故<rt>こ</rt></ruby>を<ruby>防<rt>ふせ</rt></ruby>ぐために、どうしたらいいですか。<ruby>正<rt>ただ</rt></ruby>しいものを<ruby>一<rt>ひと</rt></ruby>つ<ruby>選<rt>えら</rt></ruby>びなさい。",
                image: "images/kecelakaan_ローラー.png",
                options: [
                    "<ruby>機<rt>き</rt>械<rt>かい</rt></ruby>の<ruby>脇<rt>わき</rt></ruby>に<ruby>柵<rt>さく</rt></ruby>をつけて、うえに<ruby>乗<rt>の</rt></ruby>れないようにする",
                    "ローラーコンベアの<ruby>上<rt>うえ</rt></ruby>にカバーをつけて、<ruby>歩<rt>ある</rt></ruby>きやすくする",
                    "ローラーが<ruby>回<rt>かい</rt></ruby><ruby>転<rt>てん</rt></ruby>するように、ローラーを<ruby>固<rt>こ</rt>定<rt>てい</rt></ruby>する"
                ],
                answer: 0
            },
            {
                question: "<ruby>安<rt>あん</rt>全<rt>ぜん</rt></ruby>カバーのないスライサーで<ruby>肉<rt>にく</rt></ruby>を切っているとき、<ruby>回<rt>かい</rt></ruby><ruby>転<rt>てん</rt></ruby><ruby>刃<rt>は</rt></ruby>で<ruby>右<rt>みぎ</rt></ruby><ruby>手<rt>て</rt></ruby>を切りそうになりました。事故を防ぐには、安全カバーをつけるほかにどのような肉の持ち方がいいですか。<ruby>正<rt>ただ</rt></ruby>しいものを<ruby>一<rt>ひと</rt></ruby>つ<ruby>選<rt>えら</rt></ruby>びなさい。",
                image: "images/kecelakaan_スライサー.png",
                options: [
                    "二人で持つ",
                    "道具を使って持つ",
                    "右手だけ持つ"
                ],
                answer: 1
            }
         ]
    },

            "sesi2": {
    title: "Paket 2",
    timeLimit: 3600, // 60 menit
    questions: [
        {
            question: "一般衛生管理(<ruby>いっぱんえいせいかんり<rt>ippan eisei kanri</rt></ruby>)は３つに分<ruby>分<rt>わ</rt></ruby>けます.作業者(<ruby>さぎょうしゃ<rt>sagyōsha</rt></ruby>)の衛生管理(<ruby>えいせいかんり<rt>eisei kanri</rt></ruby>)と原<ruby>原<rt>げん</rt></ruby> <ruby>材<rt>ざい</rt></ruby> <ruby>料<rt>りょう</rt></ruby>(<ruby>げんざいりょう<rt>genzairyō</rt></ruby>)食品(<ruby>しょくひん<rt>shokuhin</rt></ruby>)の衛生管理(<ruby>えいせいかんり<rt>eisei kanri</rt></ruby>)ともうーつ物ものはどれですか。",
            options: [
                "環境管理(<ruby>かんきょうかんり<rt>kankyō kanri</rt></ruby>)。",
                "施設(<ruby>しせつ<rt>shisetsu</rt></ruby>)、設備(<ruby>せつび<rt>setsubi</rt></ruby>),器具(<ruby>きぐ<rt>kigu</rt></ruby>)などの衛生管理(<ruby>えいせいかんり<rt>eisei kanri</rt></ruby>)",
                "副作業管理(<ruby>ふくさぎょうかんり<rt>fukusagyō kanri</rt></ruby>)"
            ],
            answer: 1
        },
        {
            question: "牡蠣(<ruby>かき<rt>kaki</rt></ruby>) などの二枚(<ruby>にまい<rt>nimai</rt></ruby>)がいに存在(<ruby>そんざい<rt>sonzai</rt></ruby>)し、十分加熱(<ruby>じゅうぶんかねつ<rt>jūbun kanetsu</rt></ruby>)しないと食中毒(<rt>しょくちゅうどく</rt>shokuchūdoku)が発<ruby>発<rt>はっ</rt></ruby>生(<ruby>せい<rt>sei</rt></ruby>)しやすい原因(<ruby>げんいん<rt>gen'in</rt></ruby>)はどれか。<br>正しいものを一つ選びなさい",
            options: [
                "黄 色(<ruby>おうしょく<rt>ōshoku</rt></ruby>)ブドウ球 菌(<ruby>きゅうきん<rt>kyūkin</rt></ruby>)",
                "ノロウイルス",
                "大 腸 菌(<ruby>だいちょうきん</rt>daichōkin)"
            ],
            answer: 1
        },
        {
            question: "微 生 物(<ruby>びせいぶつ<rt>biseibutsu</rt></ruby>) は   増 殖(<ruby>ぞうしょく<rt>zōshoku</rt></ruby>) しにくい  環境(<ruby>かんきょう<rt>kankyō</rt></ruby>) はどれか、<br>正しくないものを一つ選びなさい。",
            options: [
                "30℃～40℃水分(<ruby>すいぶん<rt>suibun</rt></ruby>)があり、汚(<ruby>よご<rt>yogo</rt></ruby>)れがある環境(<ruby>かんきょう<rt>kankyō</rt></ruby>)",
                "室温(<ruby>しつおん<rt>shitsuon</rt></ruby>)で、汚(<ruby>よご<rt>yogo</rt></ruby>)れがある環境(<ruby>かんきょう<rt>kankyō</rt></ruby>)",
                "4℃以下(<ruby>いか<rt>ika</rt></ruby>)乾燥(<ruby>かんそう<rt>kansō</rt></ruby>)汚れ(<ruby>よご<rt>yogore</rt></ruby>)がない環境(<ruby>かんきょう<rt>kankyō</rt></ruby>)"
            ],
            answer: 2
        },
        {
            question: "飲 料 製 造 業(<ruby>いんりょうせいぞうぎょう<rt>inryō seizōgyō</rt></ruby>)は何なにを製造せいぞうすることですか。<br>間違っているものをひとつ選びなさい...",
            options: [
                "コーヒー。",
                "冷 凍 食 品(<ruby>れいとうしょくひん<rt>reitō shokuhin</rt></ruby>)。",
                "ジュース。"
            ],
            answer: 1
        },
        {
            question: "作業場(<ruby>さぎょうば<rt>sagyōba</rt></ruby>)に入(<ruby>はい<rt>hai</rt></ruby>)る前(<ruby>まえ<rt>mae</rt></ruby>)に行(<ruby>おこな<rt>okona</rt></ruby>)う流(<ruby>なが<rt>naga</rt></ruby>)れとして、正しいものを一つ選びなさい。",
            options: [
                "作業服(<ruby>さぎょうふく<rt>sagyōfuku</rt></ruby>)を正(<ruby>ただ<rt>tada</rt></ruby>)しく着用(<ruby>ちゃくよう<rt>chakuyō</rt></ruby>),手洗(<ruby>てあら<rt>teara</rt></ruby>)い、粘 着(<ruby>ねんちゃく<rt>nenchaku</rt></ruby>)ローラー、エアーシャワー",
                "手洗(<ruby>てあら<rt>teara</rt></ruby>)い, 作業服(<ruby>さぎょうふく<rt>sagyōfuku</rt></ruby>)を正(<ruby>ただ<rt>tada</rt></ruby>)しく着用(<ruby>ちゃくよう<rt>chakuyō</rt></ruby>)、粘 着(<ruby>ねんちゃく<rt>nenchaku</rt></ruby>)ローラー",
                "作業服(<ruby>さぎょうふく<rt>sagyōfuku</rt></ruby>)を正(<ruby>ただ<rt>tada</rt></ruby>)しく着用(<ruby>ちゃくよう<rt>chakuyō</rt></ruby>)ローラー、エアーシャワー、手洗(<ruby>てあら<rt>teara</rt></ruby>)い"
            ],
            answer: 0
        },
        {
            question: "作業中(<ruby>さぎょうちゅう<rt>sagyōchū</rt></ruby>)について、最もっと正(<ruby>ただ<rt>tada</rt></ruby>)しいものを選(<ruby>えら<rt>era</rt></ruby>)びなさい。",
            options: [
                "加熱(<ruby>かねつ<rt>kanetsu</rt></ruby>)したものや冷却(<ruby>れいきゃく<rt>reikyaku</rt></ruby>)したものを長(<ruby>なが<rt>naga</rt></ruby>)く室温(<ruby>しつおん<rt>shitsuon</rt></ruby>)で放置(<ruby>ほうち<rt>hōchi</rt></ruby>)しても大丈夫(<ruby>だいじょうぶ<rt>daijōbu</rt></ruby>)",
                "トイレに行(<ruby>い<rt>i</rt></ruby>)った後(<ruby>あと<rt>ato</rt></ruby>),洗剤(<ruby>せんざい<rt>senzai</rt></ruby>)で手洗(<ruby>てあら<rt>teara</rt></ruby>)いします。消毒液(<ruby>しょうどくえき<rt>shōdokueki</rt></ruby>)しなくても大丈夫(<ruby>だいじょうぶ<rt>daijōbu</rt></ruby>)",
                "ムダ話(<br><ruby>ばなし<rt>banashi</rt></ruby>)をしない。機械(<ruby>きかい<rt>kikai</rt></ruby>)や製品(<ruby>せいひん<rt>seihin</rt></ruby>)の異常(<ruby>いじょう<rt>ijō</rt></ruby>)が見(<ruby>み<rt>mi</rt></ruby>)つかった時(<ruby>とき<rt>toki</rt></ruby>)、機械(<ruby>きかい<rt>kikai</rt></ruby>)ラインを止(<ruby>と<rt>to</rt></ruby>)めて、すぐに責任者(<ruby>せきにんしゃ<rt>sekininsha</rt></ruby>)に報告(<ruby>ほうこく<rt>hōkoku</rt></ruby>)する"
            ],
            answer: 2
        },
        {
            question: "衛生(<ruby>えいせい<rt>eisei</rt></ruby>)とは何(<ruby>なん<rt>nan</rt></ruby>)ですか",
            options: [
                "命(<ruby>いのち<rt>inochi</rt></ruby>)を守(<ruby>まも<rt>mamo</rt></ruby>)ることです",
                "食品(<ruby>しょくひん<rt>shokuhin</rt></ruby>)を食べた人は病気になること",
                "病気になったりケガをしたりすること。"
            ],
            answer: 0
        },
        {
            question: "食品製造(<ruby>しょくひんせいぞう<rt>shokuhin seizō</rt></ruby>)の衛生管理(<ruby>えいせいかんり<rt>eisei kanri</rt></ruby>)とは何(<ruby>なん<rt>nan</rt></ruby>)を管理(<ruby>かんり<rt>kanri</rt></ruby>)することですか。<br>正しいものを一つ選びなさい",
            options: [
                "労働安全(<ruby>ろうどうあんぜん<rt>rōdō anzen</rt></ruby>)の管理(<ruby>かんり<rt>kanri</rt></ruby>)です",
                "食品(<ruby>しょくひん<rt>shokuhin</rt></ruby>)を作(<ruby>つく<rt>tsuku</rt></ruby>)る管理(<ruby>かんり<rt>kanri</rt></ruby>)です。",
                "消費者(<ruby>しょうひしゃ<rt>shōhisha</rt></ruby>)の管理(<ruby>かんり<rt>kanri</rt></ruby>)です。"
            ],
            answer: 1
        },
        {
            question: "金属以外(<ruby>きんぞくいがい<rt>kinzoku igai</rt></ruby>)の異物(<ruby>いぶつ<rt>ibutsu</rt></ruby>)(石(<ruby>いし<rt>ishi</rt></ruby>)、ガラスなど)を見(<ruby>み<rt>mi</rt></ruby>)つけることができる機械(<ruby>きかい<rt>kikai</rt></ruby>)として、正しいものを一つ選びなさい",
            options: [
                "金属検査機(<ruby>きんぞくけんさき<rt>kinzoku kensaki</rt></ruby>)",
                "X線異物検査機(<ruby>えっくすせんいぶつけんさき<rt>ekkusu-sen ibutsu kensaki</rt></ruby>)",
                "日付検査機(<ruby>ひづけけんさき<rt>hizuke kensaki</rt></ruby>)"
            ],
            answer: 1
        },
        {
            question: "製品(<ruby>せいひん<rt>seihin</rt></ruby>)の保管管理(<ruby>ほかんかんり<rt>hokan kanri</rt></ruby>)について、最もっと正しいものを一つ選びなさい。",
            options: [
                "一般的(<ruby>いっぱんてき<rt>ippanteki</rt></ruby>)に冷凍庫(<ruby>れいとうこ<rt>reitōko</rt></ruby>)は-15℃以下(<ruby>いか<rt>ika</rt></ruby>)、冷蔵庫(<ruby>れいぞうこ<rt>reizōko</rt></ruby>)は10℃以下(<ruby>いか<rt>ika</rt></ruby>)が基準(<ruby>きじゅん<rt>kijun</rt></ruby>)となる。",
                "保管用(<ruby>ほかんよう<rt>hokanyō</rt></ruby>)サンプルを適当(<ruby>てきとう<rt>tekitō</rt></ruby>)に抽出(<ruby>ちゅうしゅつ<rt>chūshutsu</rt></ruby>)して保管(<ruby>ほかん<rt>hokan</rt></ruby>)する。",
                "製品(<ruby>せいひん<rt>seihin</rt></ruby>)の微生物検査項目(<ruby>びせいぶつけんさこうもく<rt>biseibutsu kensa kōmoku</rt></ruby>)はそれぞれの工場(<ruby>こうじょう<rt>kōjō</rt></ruby>)で決(<ruby>き<rt>ki</rt></ruby>)まる。"
            ],
            answer: 0
        },
        {
            question: "アレルギー食品(<ruby>しょくひん<rt>shokuhin</rt></ruby>)の特定原材料(<ruby>とくていげんざいりょう<rt>tokutei genzairyō</rt></ruby>)として表示義務(<ruby>ひょうじぎむ<rt>hyōji gimu</rt></ruby>)がある8つの食品(<ruby>しょくひん<rt>shokuhin</rt></ruby>)で正しいものはどれでしょうか。一つ選びなさい。",
            options: [
                "そば、たまご、ピーナッツ、こむぎ、たまねぎ、えび、ぎゅうにく、くるみ",
                "えび、かに、牡蠣(<ruby>かき<rt>kaki</rt></ruby>)、にんじん、ぎゅうにく、りんご、オレンジ、そば",
                "えび、かに、こむぎ、そば、たまご、乳(<ruby>にゅう<rt>nyū</rt></ruby>)、落花生(<ruby>らっかせい</rt>rakkasei)、くるみ"
            ],
            answer: 2
        },
        {
            question: "ヒスタミンはどこにありますか。正しいものを一つ選びなさい。",
            options: [
                "果物(<ruby>くだもの<rt>kudamono</rt></ruby>)。",
                "魚(<ruby>さかな<rt>sakana</rt></ruby>)",
                "牛乳(<ruby>ぎゅうにゅう<rt>gyūnyū</rt></ruby>)"
            ],
            answer: 1
        },
        {
            question: "ヒスタミン食中毒(<ruby>しょくちゅうどく<rt>shokuchūdoku</rt></ruby>)を防(<ruby>ふせ<rt>fuse</rt></ruby>)ぐためにどうしたらいいのか一つ、正しいものを選んでください",
            options: [
                "魚(<ruby>さかな<rt>sakana</rt></ruby>)をとった後(<ruby>あと<rt>ato</rt></ruby>)ゆっくり冷凍(<ruby>れいとう<rt>reitō</rt></ruby>)してもいいです。",
                "マグロやサバなどの赤身魚(<ruby>あかみざかな<rt>akamizakana</rt></ruby>)はどこでも保存(<ruby>ほぞん<rt>hozon</rt></ruby>)できる",
                "魚(<ruby>さかな<rt>sakana</rt></ruby>)を受(<ruby>う<rt>u</rt></ruby>)け入(<ruby>い<rt>i</rt></ruby>)れたすぐ冷凍(<ruby>れいとう<rt>reitō</rt></ruby>)したらいいです"
            ],
            answer: 2
        },
        {
            question: "冷却方法(<ruby>れいきゃくほうほう<rt>reikyaku hōhō</rt></ruby>)について、間違っているものを一つ選びなさい",
            options: [
                "風冷(<ruby>ふうれい<rt>fūrei</rt></ruby>)",
                "冷蔵庫(<ruby>れいぞうこ<rt>reizōko</rt></ruby>)",
                "水冷(<ruby>すいれい<rt>suirei</rt></ruby>)"
            ],
            answer: 1
        },
        {
            question: "管理基準(<ruby>かんりきじゅん<rt>kanri kijun</rt></ruby>)から逸脱(<ruby>いつだつ<rt>itsudatsu</rt></ruby>)した場合(<ruby>ばあい<rt>baai</rt></ruby>)、改善措置(<ruby>かいぜんそち<rt>kaizen sochi</rt></ruby>)のため、なにをしなければなりませんか。<br>間違っているものを一つ選びなさい。",
            options: [
                "食品(<ruby>しょくひん<rt>shokuhin</rt></ruby>)の中(<ruby>なか<rt>naka</rt></ruby>)に危害要因(<ruby>きがいよういん<rt>kigai yōin</rt></ruby>)が残(<ruby>のこ<rt>noko</rt></ruby>)らないようにしなければなりません。",
                "改善措置(<ruby>かいぜんそち<rt>kaizen sochi</rt></ruby>)を行(<ruby>おこな<rt>okona</rt></ruby>)うまでに、作(<ruby>つく<rt>tsuku</rt></ruby>)った食品(<ruby>しょくひん<rt>shokuhin</rt></ruby>)を捨(<ruby>す<rt>su</rt></ruby>)てるかつくり直(<ruby>なお<rt>nao</rt></ruby>)すかを決(<ruby>き<rt>ki</rt></ruby>)めなくてもいい。",
                "改善措置(<ruby>かいぜんそち<rt>kaizen sochi</rt></ruby>)を行(<ruby>おこな<rt>okona</rt></ruby>)うときは、必(<ruby>かなら<rt>kanara</rt></ruby>)ず責任者(<ruby>せきにんしゃ<rt>sekininsha</rt></ruby>)の指示(<ruby>しじ<rt>shiji</rt></ruby>)に従(<ruby>したが<rt>shitaga</rt></ruby>)ってください。"
            ],
            answer: 1
        },
        {
            question: "微生物(<ruby>びせいぶつ<rt>biseibutsu</rt></ruby>)を増殖(<ruby>ぞうしょく<rt>zōshoku</rt></ruby>)させないための方法(<ruby>ほうほう<rt>hōhō</rt></ruby>)について、正しいものを一つ選びなさい。",
            options: [
                "冷蔵庫(<ruby>れいぞうこ<rt>reizōko</rt></ruby>)から取(<ruby>と<rt>to</rt></ruby>)り出(<ruby>だ<rt>da</rt></ruby>)した食品(<ruby>しょくひん<rt>shokuhin</rt></ruby>)は常温(<ruby>じょうおん<rt>jōon</rt></ruby>)で長(<ruby>なが<rt>naga</rt></ruby>)く放置(<ruby>ほうち<rt>hōchi</rt></ruby>)する。",
                "加熱(<ruby>かねつ<rt>kanetsu</rt></ruby>)したものを室温(<ruby>しつおん<rt>shitsuon</rt></ruby>)で温度(<ruby>おんど<rt>ondo</rt></ruby>)をゆっくり下(<ruby>さ<rt>sa</rt></ruby>)げる。",
                "世代交代時間(<ruby>せだいこうたいじかん<rt>sedai kōtai jikan</rt></ruby>)があるので、時間(<ruby>じかん<rt>jikan</rt></ruby>)もコントロールするのが必要(<ruby>ひつよう<rt>hitsuyō</rt></ruby>)である。"
            ],
            answer: 2
        },
        {
            question: "作業着(<ruby>さぎょうぎ<rt>sagyōgi</rt></ruby>)について、間違っているものを一つ選びなさい。",
            options: [
                "作業着(<ruby>さぎょうぎ<rt>sagyōgi</rt></ruby>)は、いつも清潔(<ruby>せいけつ<rt>seiketsu</rt></ruby>)なものを着(<ruby>き<rt>ki</rt></ruby>)なければならない。",
                "清潔(<ruby>せいけつ<rt>seiketsu</rt></ruby>)な服(<ruby>ふく<rt>fuku</rt></ruby>)なら、なにを着(<ruby>き<rt>ki</rt></ruby>)ても良(<ruby>よ<rt>yo</rt></ruby>)い。",
                "作業着(<ruby>さぎょうぎ<rt>sagyōgi</rt></ruby>)は、決(<ruby>き<rt>ki</rt></ruby>)められた着(<ruby>き<rt>ki</rt></ruby>)かたをしなければならない。"
            ],
            answer: 1
        },
        {
            question: "細菌(<ruby>さいきん<rt>saikin</rt></ruby>)が原因(<ruby>げんいん<rt>gen'in</rt></ruby>)の食中毒(<ruby>しょくちゅうどく<rt>shokuchūdoku</rt></ruby>)を発生(<ruby>はっせい<rt>hassei</rt></ruby>)させないために食中毒予防(<ruby>しょくちゅうどくよぼう<rt>shokuchūdoku yobō</rt></ruby>)の原則(<ruby>げんそく<rt>gensoku</rt></ruby>)がいくつありますか。",
            options: [
                "7 原則(<ruby>げんそく<rt>gensoku</rt></ruby>)",
                "4 原則(<ruby>げんそく<rt>gensoku</rt></ruby>)",
                "3 原則(<ruby>げんそく<rt>gensoku</rt></ruby>)"
            ],
            answer: 2
        },
        {
            question: "手袋(<ruby>てぶくろ<rt>tebukuro</rt></ruby>)をつける理由(<ruby>りゆう<rt>riyū</rt></ruby>)として、正しいものを一つ選びなさい",
            options: [
                "手(<ruby>て<rt>te</rt></ruby>)の表面(<ruby>ひょうめん<rt>hyōmen</rt></ruby>)にいる微生物(<ruby>びせいぶつ<rt>biseibutsu</rt></ruby>)が、食品(<ruby>しょくひん<rt>shokuhin</rt></ruby>)につかないようにするため。",
                "手(<ruby>て<rt>te</rt></ruby>)が汚(<ruby>よご<rt>yogo</rt></ruby>)れないようにするため。",
                "手(<ruby>て<rt>te</rt></ruby>)が冷(<ruby>つめ<rt>tsume</rt></ruby>)たくならないようにするため。"
            ],
            answer: 0
        },
        {
            question: "作業場(<ruby>さぎょうば<rt>sagyōba</rt></ruby>)に持(<ruby>も<rt>mo</rt></ruby>)って入(<ruby>はい<rt>hai</rt></ruby>)ってよいものを一つ選びなさい",
            options: [
                "金銭(<ruby>きんせん<rt>kinsen</rt></ruby>)やたばこ",
                "飴(<ruby>あめ<rt>ame</rt></ruby>)や薬(<ruby>くすり<rt>kusuri</rt></ruby>)",
                "ロッカー鍵(<ruby>かぎ<rt>kagi</rt></ruby>)"
            ],
            answer: 2
        },
        {
            question: "器具(<ruby>きぐ<rt>kigu</rt></ruby>)を洗(<ruby>あら<rt>ara</rt></ruby>)うとき使(<ruby>つか<rt>tsuka</rt></ruby>)うものについて、正しいものを一つ選びなさい。",
            options: [
                "殺菌剤(<ruby>さっきんざい<rt>sakkinzai</rt></ruby>)を使(<ruby>つか<rt>tsuka</rt></ruby>)って洗(<ruby>あら<rt>ara</rt></ruby>)う。",
                "アルコールを使(<ruby>つか<rt>tsuka</rt></ruby>)って洗(<ruby>あら<rt>ara</rt></ruby>)う。",
                "洗浄剤(<ruby>せんじょうざい<rt>senjōzai</rt></ruby>)を使(<ruby>つか<rt>tsuka</rt></ruby>)って洗(<ruby>あら<rt>ara</rt></ruby>)う。"
            ],
            answer: 2
        },
        {
            question: "殺菌剤(<ruby>さっきんざい<rt>sakkinzai</rt></ruby>)を使(<ruby>つか<rt>tsuka</rt></ruby>)って調理器具(<ruby>ちょうりきぐ<rt>chōri kigu</rt></ruby>)を消毒(<ruby>しょうどく<rt>shōdoku</rt></ruby>)する方法(<ruby>ほうほう<rt>hōhō</rt></ruby>)として、正しいものを一つ選びなさい。",
            options: [
                "調理器具(<ruby>ちょうりきぐ<rt>chōri kigu</rt></ruby>)を洗(<ruby>あら<rt>ara</rt></ruby>)う前(<ruby>まえ<rt>mae</rt></ruby>)に消毒(<ruby>しょうどく<rt>shōdoku</rt></ruby>)する。",
                "消毒(<ruby>しょうどく<rt>shōdoku</rt></ruby>)する前(<ruby>まえ<rt>mae</rt></ruby>)に調理器具(<ruby>ちょうりきぐ<rt>chōri kigu</rt></ruby>)に水(<ruby>みず<rt>mizu</rt></ruby>)をつける。",
                "調理器具(<ruby>ちょうりきぐ<rt>chōri kigu</rt></ruby>)を洗(<ruby>あら<rt>ara</rt></ruby>)って乾(<ruby>かわ<rt>kawa</rt></ruby>)かしてから消毒(<ruby>しょうどく<rt>shōdoku</rt></ruby>)する。"
            ],
            answer: 2
        },
        {
            question: "殺菌(<ruby>さっきん<rt>sakkin</rt></ruby>)した食品(<ruby>しょくひん<rt>shokuhin</rt></ruby>)の扱(<ruby>あつか<rt>atsuka</rt></ruby>)い方(<ruby>かた<rt>kata</rt></ruby>)について、間違っているものを一つ選びなさい。",
            options: [
                "手袋(<ruby>てぶくろ<rt>tebukuro</rt></ruby>)をつけていない手(<ruby>て<rt>te</rt></ruby>)で食品(<ruby>しょくひん<rt>shokuhin</rt></ruby>)を持(<ruby>も<rt>mo</rt></ruby>)つ。",
                "手袋(<ruby>てぶくろ<rt>tebukuro</rt></ruby>)をつけた手(<ruby>て<rt>te</rt></ruby>)で食品(<ruby>しょくひん<rt>shokuhin</rt></ruby>)を持(<ruby>も<rt>mo</rt></ruby>)つ。",
                "消毒(<ruby>しょうどく<rt>shōdoku</rt></ruby>)した道具(<ruby>どうぐ<rt>dōgu</rt></ruby>)を使(<ruby>つか<rt>tsuka</rt></ruby>)って食品(<ruby>しょくひん<rt>shokuhin</rt></ruby>)を持(<ruby>も<rt>mo</rt></ruby>)つ。"
            ],
            answer: 0
        },
        {
            question: "食材(<ruby>しょくざい<rt>shokuzai</rt></ruby>)の扱(<ruby>あつか<rt>atsuka</rt></ruby>)い方(<ruby>かた<rt>kata</rt></ruby>)について、違っているものを一つ選びなさい。",
            options: [
                "冷凍品(<ruby>れいとうひん<rt>reitōhin</rt></ruby>)がとけていたら、また冷凍(<ruby>れいとう<rt>reitō</rt></ruby>)する。",
                "砂糖(<ruby>さとう<rt>satō</rt></ruby>)や塩(<ruby>しお<rt>shio</rt></ruby>)は、温度湿度(<ruby>おんどしつど<rt>ondo shitsudo</rt></ruby>)が低(<ruby>ひく<rt>hiku</rt></ruby>)いところに保管(<ruby>ほかん<rt>hokan</rt></ruby>)する。",
                "小麦粉(<ruby>こむぎこ<rt>komugiko</rt></ruby>)やでんぷんは、水(<ruby>みず<rt>mizu</rt></ruby>)にぬれないように保管(<ruby>ほかん<rt>hokan</rt></ruby>)する。"
            ],
            answer: 0
        },
        {
            question: "アレルギーがほかの食品(<ruby>しょくひん<rt>shokuhin</rt></ruby>)に混(<ruby>ま<rt>ma</rt></ruby>)ざってしまうことを防(<ruby>ふせ<rt>fuse</rt></ruby>)ぐために、なにをしますか。<br>間違っているものを一つ選びなさい",
            options: [
                "特定原材料(<ruby>とくていげんざいりょう<rt>tokutei genzairyō</rt></ruby>)を含(<ruby>ふく<rt>fuku</rt></ruby>)む製品(<ruby>せいひん<rt>seihin</rt></ruby>)は一日(<ruby>いちにち<rt>ichinichi</rt></ruby>)の最初(<ruby>さいしょ<rt>saisho</rt></ruby>)に製造(<ruby>せいぞう<rt>seizō</rt></ruby>)する。",
                "アレルギー物質(<ruby>ぶっしつ<rt>busshitsu</rt></ruby>)を言(<ruby>ふく<rt>fuku</rt></ruby>)む原材料(<ruby>げんざいりょう<rt>genzairyō</rt></ruby>)とアレルギー物質(<ruby>ぶっしつ<rt>busshitsu</rt></ruby>)を含(<ruby>ふく<rt>fuku</rt></ruby>)まない原材料(<ruby>げんざいりょう<rt>genzairyō</rt></ruby>)と別々(<ruby>べつべつ<rt>betsubetsu</rt></ruby>)に保管(<ruby>ほかん<rt>hokan</rt></ruby>)する。",
                "アレルギー物質(<ruby>ぶっしつ<rt>busshitsu</rt></ruby>)を含(<ruby>ふく<rt>fuku</rt></ruby>)む原材料(<ruby>げんざいりょう<rt>genzairyō</rt></ruby>)とアレルギー物質(<ruby>ぶっしつ<rt>busshitsu</rt></ruby>)を含(<ruby>ふく<rt>fuku</rt></ruby>)まない材料(<ruby>ざいりょう<rt>zairyō</rt></ruby>)を同(<ruby>おな<rt>ona</rt></ruby>)じラインで製造(<ruby>せいぞう<rt>seizō</rt></ruby>)する場合(<ruby>ばあい<rt>baai</rt></ruby>)、徹底的(<ruby>てっていてき<rt>tetteiteki</rt></ruby>)に洗浄(<ruby>せんじょう<rt>senjō</rt></ruby>)する。"
            ],
            answer: 1
        },
        {
            question: "寄生虫生物(<ruby>きせいちゅうせいぶつ<rt>kiseichū seibutsu</rt></ruby>)の名前(<ruby>なまえ<rt>namae</rt></ruby>)は何(<ruby>なん<rt>nan</rt></ruby>)ですか。正しいものを一つ選びなさい",
            options: [
                "おにぎり、サンドイッチ",
                "サバ、イカ",
                "人(<ruby>ひと<rt>hito</rt></ruby>)の皮膚(<ruby>ひふ<rt>hifu</rt></ruby>)や傷口(<ruby>きずぐち<rt>kizuguchi</rt></ruby>)"
            ],
            answer: 1
        },
        {
            question: "殺菌剤(<ruby>さっきんざい<rt>sakkinzai</rt></ruby>)の扱(<ruby>あつか<rt>atsuka</rt></ruby>)い方(<ruby>かた<rt>kata</rt></ruby>)として、間違っているものを一つ選びなさい",
            options: [
                "殺菌剤(<ruby>さっきんざい<rt>sakkinzai</rt></ruby>)は、どこで保管(<ruby>ほかん<rt>hokan</rt></ruby>)しても良(<ruby>よ<rt>yo</rt></ruby>)い。",
                "殺菌剤(<ruby>さっきんざい<rt>sakkinzai</rt></ruby>)を容器(<ruby>ようき<rt>yōki</rt></ruby>)に移(<ruby>うつ<rt>utsu</rt></ruby>)すときは、必(<ruby>かなら<rt>kanara</rt></ruby>)ず移(<ruby>うつ<rt>utsu</rt></ruby>)した容器(<ruby>ようき<rt>yōki</rt></ruby>)に「殺菌剤(<ruby>さっきんざい<rt>sakkinzai</rt></ruby>)」と表示(<ruby>ひょうじ<rt>hyōji</rt></ruby>)する。",
                "目(<ruby>め<rt>me</rt></ruby>)に入(<ruby>はい<rt>hai</rt></ruby>)らないようにする。"
            ],
            answer: 0
        },
        {
            question: "手洗(<ruby>てあら<rt>teara</rt></ruby>)いについて、間違っているものを一つ選びなさい",
            options: [
                "手(<ruby>て<rt>te</rt></ruby>)についた汚(<ruby>よご<rt>yogo</rt></ruby>)れや微生物(<ruby>びせいぶつ<rt>biseibutsu</rt></ruby>)をとるために行(<ruby>おこな<rt>okona</rt></ruby>)う。",
                "爪(<ruby>つめ<rt>tsume</rt></ruby>)の中(<ruby>なか<rt>naka</rt></ruby>)は洗(<ruby>あら<rt>ara</rt></ruby>)わなくても良(<ruby>よ<rt>yo</rt></ruby>)い。",
                "指(<ruby>ゆび<rt>yubi</rt></ruby>)の間(<ruby>あいだ<rt>aida</rt></ruby>)や手首(<br><ruby>てくび<rt>tekubi</rt></ruby>)までしっかり洗(<ruby>あら<rt>ara</rt></ruby>)う。"
            ],
            answer: 1
        },
        {
            question: "殺菌剤(<ruby>さっきんざい<rt>sakkinzai</rt></ruby>)を使(<ruby>つか<rt>tsuka</rt></ruby>)うときに注意(<ruby>ちゅうい<rt>chūi</rt></ruby>)する点(<ruby>てん<rt>ten</rt></ruby>)について、間違っているものを一つ選びなさい。",
            options: [
                "殺菌剤(<ruby>さっきんざい<rt>sakkinzai</rt></ruby>)の濃度(<ruby>のうど<rt>nōdo</rt></ruby>)",
                "殺菌(<ruby>さっきん<rt>sakkin</rt></ruby>)する時間(<ruby>じかん<rt>jikan</rt></ruby>)",
                "殺菌剤(<ruby>さっきんざい<rt>sakkinzai</rt></ruby>)の温度(<ruby>おんど<rt>ondo</rt></ruby>)"
            ],
            answer: 2
        },
        {
            question: "セレウス菌(<ruby>きん<rt>kin</rt></ruby>)による食中毒(<ruby>しょくちゅうどく<rt>shokuchūdoku</rt></ruby>)の原因(<ruby>げんいん<rt>gen'in</rt></ruby>)となる食品(<ruby>しょくひん<rt>shokuhin</rt></ruby>)はどれですか",
            options: [
                "牡蠣(<ruby>かき<rt>kaki</rt></ruby>)などの二枚貝(<ruby>にまいがい<rt>nimai gai</rt></ruby>)",
                "米(<ruby>こめ<rt>kome</rt></ruby>)や小麦(<ruby>こむぎ<rt>komugi</rt></ruby>)などを使(<ruby>つか<rt>tsuka</rt></ruby>)って調理(<ruby>ちょうり<rt>chōri</rt></ruby>)された食品(<ruby>しょくひん<rt>shokuhin</rt></ruby>)",
                "缶詰(<ruby>かんづめ<rt>kanzume</rt></ruby>)"
            ],
            answer: 1
        },
        {
            question: "食肉(<ruby>しょくにく<rt>shokuniku</rt></ruby>)、魚介類(<ruby>ぎょかいるい<rt>gyokairui</rt></ruby>) は、何度以下(<ruby>なんどいか<rt>nando ika</rt></ruby>)で保管(<ruby>ほかん<rt>hokan</rt></ruby>)すればいいですか",
            options: [
                "4℃以下(<ruby>いか<rt>ika</rt></ruby>)",
                "10℃以下(<ruby>いか<rt>ika</rt></ruby>)",
                "15℃以下(<ruby>いか<rt>ika</rt></ruby>)"
            ],
            answer: 0
        },
        {
            question: "熱中症(<ruby>ねっちゅうしょう<rt>necchūshō</rt></ruby>)の症状(<ruby>しょうじょう<rt>shōjō</rt></ruby>)について、間違っているものを一つ選びなさい。",
            options: [
                "めまい、たちくらみ、手足(<ruby>てあし<rt>teashi</rt></ruby>)のしびれ、気分(<ruby>きぶん<rt>kibun</rt></ruby>)が恶(<ruby>わる<rt>waru</rt></ruby>)い",
                "発熱(<ruby>はつねつ<rt>hatsunetsu</rt></ruby>)、激しい痛(<ruby>はげしいた<rt>hageshii ita</rt></ruby>)い腹痛(<ruby>ふくつう<rt>fukutsū</rt></ruby>)、下痢(<ruby>げり<rt>geri</rt></ruby>)",
                "返事(<ruby>へんじ<rt>henji</rt></ruby>)がおかしい、意識消失(<ruby>いしきしょうしつ<rt>ishiki shōshitsu</rt></ruby>)、けいれん、からだが熱(<ruby>あつ<rt>atsu</rt></ruby>)い"
            ],
            answer: 1
        },
        {
            question: "表(<ruby>ひょう<rt>hyō</rt></ruby>)はソーセージ1セット(5本(<ruby>ほん<rt>hon</rt></ruby>))の配合例(<ruby>はいごうれい</ruby>haigōrei)です。この配合(<ruby>はいごう<rt>haigō</rt></ruby>)に従(<ruby>したが<rt>shitaga</rt></ruby>)うと豚(<ruby>ぶた<rt>buta</rt></ruby>)ひき肉(<ruby>にく<rt>niku</rt></ruby>)6kgからどれだけのソーセージを作(<ruby>つく<rt>tsuku</rt></ruby>)れるか",
            options: [
                "20本(<ruby>ほん<rt>hon</rt></ruby>)",
                "120本(<ruby>ほん<rt>hon</rt></ruby>)",
                "180本(<ruby>ほん<rt>hon</rt></ruby>)"
            ],
            answer: 1
        },
        {
            question: "10%の次亜塩素酸(<ruby>じあえんそさん<rt>jiensosan</rt></ruby>)ナトリウム(NaOCl)の溶液(<ruby>ようえき<rt>yōeki</rt></ruby>)があります。5ml溶液(<ruby>ようえき<rt>yōeki</rt></ruby>)を使用(<ruby>しよう<rt>shiyō</rt></ruby>)して、200ppm次亜塩素酸(<ruby>じあえんそさん<rt>jiensosan</rt></ruby>)ナトリウム(NaOCl)を作(<ruby>つく<rt>tsuku</rt></ruby>)るために、どれぐらい水(<ruby>みず<rt>mizu</rt></ruby>)が必要(<ruby>ひつよう<rt>hitsuyō</rt></ruby>)ですか。正しいものを一つ選びなさい。(200ppm=0.02%)",
            options: [
                "2L",
                "2.5L",
                "3L"
            ],
            answer: 1
        },
        {
            question: "トレーを両手(<ruby>りょうて<rt>ryōte</rt></ruby>)で持(<ruby>も<rt>mo</rt></ruby>)って、歩(<ruby>ある<rt>aru</rt></ruby>)いて移動(<ruby>いどう<rt>idō</rt></ruby>)しようとしたところ、濡(<ruby>ぬ<rt>nu</rt></ruby>)れた床(<ruby>ゆか<rt>yuka</rt></ruby>)で滑(<ruby>すべ<rt>sube</rt></ruby>)って転倒(<ruby>てんとう<rt>tentō</rt></ruby>)しそうになった。この事故(<ruby>じこ<rt>jiko</rt></ruby>)を防(<ruby>ふせ<rt>fuse</rt></ruby>)ぐために、どうしたらいいですか。正しいものを一つ選びなさい",
            options: [
                "床(<ruby>ゆか<rt>yuka</rt></ruby>)の水(<ruby>みず<rt>mizu</rt></ruby>)をきちんとふき取(<br><ruby>と<rt>to</rt></ruby>)る。",
                "片手(<ruby>かたて<rt>katate</rt></ruby>)で持(<ruby>も<rt>mo</rt></ruby>)つ。",
                "両手(<ruby>りょうて<rt>ryōte</rt></ruby>)で持(<ruby>も<rt>mo</rt></ruby>)つ。"
            ],
            answer: 0
        },
        {
            question: "パン箱(<ruby>ばこ<rt>bako</rt></ruby>)を両手(<ruby>りょうて<rt>ryōte</rt></ruby>)で持(<ruby>も<rt>mo</rt></ruby>)ち、トラックに向(<ruby>む<rt>mu</rt></ruby>)かって駐車場(<ruby>ちゅうしゃじょう<rt>chūshajō</rt></ruby>)を歩(<ruby>ある<rt>aru</rt></ruby>)いていたとき、通路(<ruby>つうろ<rt>tsūro</rt></ruby>)に置(<ruby>お<rt>o</rt></ruby>)かれた空箱(<ruby>からばこ<rt>karabako</rt></ruby>)につまずき転倒(<ruby>てんとう<rt>tentō</rt></ruby>)しそうになった。この事故(<ruby>じこ<rt>jiko</rt></ruby>)を防(<ruby>ふせ<rt>fuse</rt></ruby>)ぐためにどうしたらいいですか。<br>間違っているものを一つ選びなさい",
            options: [
                "通路(<ruby>つうろ<rt>tsūro</rt></ruby>)に物(<ruby>もの<rt>mono</rt></ruby>)を置(<ruby>お<rt>o</rt></ruby>)いたままにしない。",
                "作業始前(<ruby>さぎょうしまえ<rt>sagyō shimae</rt></ruby>)には通路(<ruby>つうろ<rt>tsūro</rt></ruby>)の安全(<ruby>あんぜん<rt>anzen</rt></ruby>)を確認(<ruby>かくにん<rt>kakunin</rt></ruby>)しなくてもいい。",
                "箱(<ruby>はこ<rt>hako</rt></ruby>)を重(<ruby>かさ<rt>kasa</rt></ruby>)ねてはこぶときは、前(<ruby>まえ<rt>mae</rt></ruby>)が見(<ruby>み<rt>mi</rt></ruby>)えるの数(<br><ruby>すう<rt>sū</rt></ruby>)の箱(<ruby>はこ<rt>hako</rt></ruby>)をもつ"
            ],
            answer: 1
        },
        {
            question: "ベルトコンベアを止(<ruby>と<rt>to</rt></ruby>)めない清掃(<ruby>せいそう<rt>seisō</rt></ruby>)を行(<ruby>おこな<rt>okona</rt></ruby>)っていたところ、ぞうきんが引(<ruby>ひ</ruby>hi)っ掛(<ruby>か<rt>ka</rt></ruby>)かって手(<ruby>て<rt>te</rt></ruby>)が巻(<ruby>ま<rt>ma</rt></ruby>)き込(<ruby>こ<rt>ko</rt></ruby>)まれそうになった。この事故(<ruby>じこ<rt>jiko</rt></ruby>)の原因(<ruby>げんいん<rt>gen'in</rt></ruby>)は何(<ruby>なん<rt>nan</rt></ruby>)ですか。正しいものを一つ選びなさい",
            options: [
                "清掃(<ruby>せいそう<rt>seisō</rt></ruby>)するときにベルトコンベアを止(<ruby>と<rt>to</rt></ruby>)めなかったため。",
                "ぞうきんを使(<ruby>つか<rt>tsuka</rt></ruby>)って清掃(<ruby>せいそう<rt>seisō</rt></ruby>)したため。",
                "停止(<ruby>ていし<rt>teishi</rt></ruby>)ボタンを押(<ruby>お<rt>o</rt></ruby>)したため。"
            ],
            answer: 0
        },
        {
            question: "安全標識(<ruby>あんぜんひょうしき<rt>anzen hyōshiki</rt></ruby>)について。下記(<ruby>かき<rt>kaki</rt></ruby>)の標識(<ruby>ひょうしき<rt>hyōshiki</rt></ruby>)はどういう意味(<ruby>いみ<rt>imi</rt></ruby>)ですか。正しいものを一つ選びなさい。",
            options: [
                "手(<ruby>て<rt>te</rt></ruby>)で触(<ruby>ふ<rt>fu</rt></ruby>)れることを禁止(<ruby>きんし<rt>kinshi</rt></ruby>)する。",
                "扉(<ruby>とびら<rt>tobira</rt></ruby>)をあけっぱなしにすることを禁止(<ruby>きんし<rt>kinshi</rt></ruby>)する。",
                "入(<ruby>はい<rt>hai</rt></ruby>)ることを禁止(<ruby>きんし<rt>kinshi</rt></ruby>)する。"
            ],
            answer: 2
        },
        {
            question: "安全標識(<ruby>あんぜんひょうしき<rt>anzen hyōshiki</rt></ruby>)について、はさまれる危険(<ruby>きけん<rt>kiken</rt></ruby>)を知(<ruby>し<rt>shi</rt></ruby>)らせる標識(<ruby>ひょうしき<rt>hyōshiki</rt></ruby>)はどれですか。<br>間違っているものを一つ選びなさい。",
            options: [
                "標識 A",
                "標識 B",
                "標識 C"
            ],
            answer: 0
        },
        {
            question: "安全標識(<ruby>あんぜんひょうしき<rt>anzen hyōshiki</rt></ruby>)について、やけどをする危険(<ruby>きけん<rt>kiken</rt></ruby>)を知(<ruby>し<rt>shi</rt></ruby>)らせる標識(<ruby>ひょうしき<rt>hyōshiki</rt></ruby>)はどれですか。<br>間違っているものを一つ選びなさい",
            options: [
                "標識 A",
                "標識 B",
                "標識 C"
            ],
            answer: 1
        }
      ]
    }
};
