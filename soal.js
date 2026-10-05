const sessionsData = {
    "sesi1": {
        title: "Paket 1",
        timeLimit: 3600, // 60 Menit
        questions: [
            {
                question: "<ruby>安<rt>あん</rt>全<rt>ぜん</rt></ruby><ruby>不<rt>ふ</rt>安<rt>あん</rt></ruby>定ではない<ruby>食<rt>しょく</rt>品<rt>ひん</rt></ruby>を<ruby>作<rt>つく</rt></ruby>って、それが<ruby>売<rt>う</rt></ruby>られてしまうとどうなりますか。<ruby>正<rt>ただ</rt></ruby>しいものを<ruby>一<rt>ひと</rt></ruby>つ<ruby>選<rt>えら</rt></ruby>びなさい。",
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
                    "<ruby>製<rt>せい</rt>品<rt>ひん</rt></ruby>の<ruby>状<rt>じょう</rt>態<rt>たい</rt></ruby>や、<ruby>異<rt>い</rt></ruby><ruby>物<rt>ぶつ</rt></ruby>があるかどうか<ruby>注<rt>ちゅう</rt>意<rt>い</rt></ruby>する。",
                    "<ruby>隣<rt>となり</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>とテレビの<ruby>話<rt>はな</rt></ruby>しながら<ruby>作<rt>さ</rt>業<rt>ぎょう</rt></ruby>する。",
                    "<ruby>時<rt>じ</rt>間<rt>かん</rt></ruby>が<ruby>気<rt>き</rt></ruby>になるので、<ruby>何<rt>なん</rt></ruby><ruby>度<rt>ど</rt></ruby><ruby>時<rt>とき</rt></ruby><ruby>計<rt>けい</rt></ruby>を<ruby>見<rt>み</rt></ruby>る。"
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
                question: "多くの<ruby>微<rt>び</rt>生<rt>せい</rt></ruby><ruby>物<rt>ぶつ</rt></ruby>を<ruby>殺<rt>ころ</rt></ruby>すためには、何度何<ruby>秒<rt>びょう</rt></ruby><ruby>間<rt>かん</rt></ruby><ruby>加<rt>か</rt>熱<rt>ねつ</rt></ruby>しますか。<ruby>正<rt>ただ</rt></ruby>しいものを<ruby>一<rt>ひと</rt></ruby>つ<ruby>選<rt>えら</rt></ruby>びなさい。",
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
                    "<ruby>自<rt>じ</rt>記<rt>き</rt></ruby><ruby>温<rt>おん</rt>度<rt>ど</rt></ruby><ruby>計<rt>けい</rt></ruby>"
                ],
                answer: 0
            },
            {
                question: "<ruby>日<rt>に</rt>本<rt>ほん</rt></ruby>の<ruby>食<rt>しょく</rt>品<rt>ひん</rt></ruby><ruby>衛<rt>えい</rt>生<rt>せい</rt></ruby><ruby>法<rt>ほう</rt></ruby>では、<ruby>冷<rt>れい</rt>凍<rt>とう</rt></ruby><ruby>庫<rt>こ</rt></ruby>の<ruby>基<rt>き</rt>準<rt>じゅん</rt></ruby><ruby>温<rt>おん</rt>度<rt>ど</rt></ruby>は何度<ruby>以<rt>い</rt>か<rt>か</rt></ruby>ですか。<ruby>正<rt>ただ</rt></ruby>しいものを<ruby>一<rt>ひと</rt></ruby>つ<ruby>選<rt>えら</rt></ruby>びなさい。",
                options: [
                    "－15ºC<ruby>以<rt>い</rt>か<rt>か</rt></ruby>",
                    "－5ºC<ruby>以<rt>い</rt>か<rt>か</rt></ruby>",
                    "－10ºC<ruby>以<rt>い</rt>か<rt>か</rt></ruby>"
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
                    "<ruby>危<rt>き</rt>険<rt>けん</rt></ruby><ruby>要<rt>よう</rt></ruby><ruby>因<rt>いん</rt></ruby>を<ruby>明<rt>めい</rt>確<rt>かく</rt></ruby>にして<ruby>重<rt>じゅう</rt>要<rt>よう</rt></ruby><ruby>点<rt>てん</rt></ruby>を<ruby>管<rt>かん</rt>理<rt>り</rt></ruby>する"
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
                    "<ruby>作<rt>さ</rt>業<rt>ぎょう</rt></ruby><ruby>服<rt>ふく</rt></ruby>の<ruby>袖<rt>そde</rt>口<rt>ぐち</rt></ruby>は、<ruby>絞<rt>しぼ</rt></ruby>ったものをつかう"
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
                    "<ruby>機<rt>き</rt>械<rt>かい</rt></ruby>の<ruby>取<rt>と</rt></ruby>り<ruby>外<rt>はず</rt></ruby>せるところは、<ruby>外<rt>はず</rt></ruby>して<ruby>清<rt>せい</rt>掃<rt>そう</rt></ruby>する",
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
                question: "以下は450ｇのうどんの<ruby>配<rt>はい</rt>合<rt>ごう</rt></ruby>です。同じ<ruby>配<rt>はい</rt>合<rt>ごう</rt></ruby>で<ruby>作<rt>つく</rt></ruby>る時に、<ruby>小<rt>こ</rt></ruby><ruby>麦<rt>むぎ</rt></ruby><ruby>粉<rt>こ</rt></ruby>10㎏あれば、うどんは何㎏できますか。<ruby>正<rt>ただ</rt></ruby>しいものを<ruby>一<rt>ひと</rt></ruby>つ<ruby>選<rt>えら</rt></ruby>びなさい。（<ruby>原<rt>げん</rt>料<rt>りょう</rt></ruby>：<ruby>量<rt>りょう</rt></ruby>）<ruby>小<rt>こ</rt></ruby><ruby>麦<rt>むぎ</rt></ruby><ruby>粉<rt>こ</rt></ruby>：300g、<ruby>食<rt>しょく</rt></ruby><ruby>塩<rt>えん</rt></ruby>：15g、<ruby>水<rt>みず</rt></ruby>：135g",
                options: [
                    "16㎏",
                    "15㎏",
                    "17㎏"
                ],
                answer: 1
            },
            {
                question: "<ruby>動<rt>うご</rt></ruby>いているベルトコンベアを<ruby>清<rt>せい</rt>掃<rt>そう</rt></ruby>していた時に、ぞうきんがベルトに<ruby>引<rt>ひ</rt></ruby>っかかって、<ruby>手<rt>て</rt></ruby>が<ruby>機<rt>き</rt>械<rt>かい</rt></ruby>に<ruby>巻<rt>ま</rt></ruby>き<ruby>込<rt>こ</rt></ruby>まれそうになりました。この<ruby>事<rt>じ</rt>故<rt>こ</rt></ruby>を<ruby>防<rt>ふせ</rt></ruby>ぐために、どうしたらいいですか。<ruby>正<rt>ただ</rt></ruby>しいものを<ruby>一<rt>ひと</rt></ruby>つ<ruby>選<rt>えら</rt></ruby>びなさい。",
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
                question: "<ruby>機<rt>き</rt>械<rt>かい</rt></ruby>の<ruby>反<rt>はん</rt>対<rt>たい</rt></ruby><ruby>側<rt>がわ</rt></ruby>に行こうとして、ローラーコンベアの<ruby>上<rt>うえ</rt></ruby>に<ruby>乗<rt>の</rt></ruby>ったために、転んでけがをしました。この<ruby>事<rt>じ</rt>故<rt>こ</rt></ruby>を<ruby>防<rt>ふせ</rt></ruby>ぐために、どうしたらいいですか。<ruby>正<rt>ただ</rt></ruby>しいものを<ruby>一<rt>ひと</rt></ruby>つ<ruby>選<rt>えら</rt></ruby>びなさい。",
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
                question: "<ruby>一<rt>いっ</rt>般<rt>ぱん</rt></ruby><ruby>衛<rt>えい</rt>生<rt>せい</rt></ruby><ruby>管<rt>かん</rt>理<rt>り</rt></ruby>は3つに分かれます。<ruby>作<rt>さ</rt>業<rt>ぎょう</rt></ruby><ruby>者<rt>しゃ</rt></ruby>の<ruby>衛<rt>えい</rt>生<rt>せい</rt></ruby><ruby>管<rt>かん</rt>理<rt>り</rt></ruby>と<ruby>原<rt>げん</rt>材<rt>ざい</rt></ruby><ruby>料<rt>りょう</rt></ruby>・<ruby>食<rt>しょく</rt>品<rt>ひん</rt></ruby>の<ruby>衛<rt>えい</rt>生<rt>せい</rt></ruby><ruby>管<rt>かん</rt>理<rt>り</rt></ruby>ともう1つはどれですか。",
                options: [
                    "<ruby>環<rt>かん</rt>境<rt>きょう</rt></ruby><ruby>管<rt>かん</rt>理<rt>り</rt></ruby>。",
                    "<ruby>施<rt>し</rt>設<rt>せつ</rt></ruby>、<ruby>設<rt>せつ</rt>備<rt>び</rt></ruby>、<ruby>器<rt>き</rt>具<rt>ぐ</rt></ruby>などの<ruby>衛<rt>えい</rt>生<rt>せい</rt></ruby><ruby>管<rt>かん</rt>理<rt>り</rt></ruby>",
                    "<ruby>副<rt>ふく</rt></ruby><ruby>作<rt>さ</rt>業<rt>ぎょう</rt></ruby><ruby>管<rt>かん</rt>理<rt>り</rt></ruby>"
                ],
                answer: 1
            },
            {
                question: "<ruby>牡<rt>か</rt></ruby><ruby>蠣<rt>き</rt></ruby>などの二<ruby>枚<rt>まい</rt></ruby><ruby>貝<rt>がい</rt></ruby>に<ruby>存<rt>そん</rt>在<rt>ざい</rt></ruby>し、十<ruby>分<rt>ぶん</rt></ruby><ruby>加<rt>か</rt>熱<rt>ねつ</rt></ruby>しないと<ruby>食<rt>しょく</rt>中<rt>ちゅう</rt></ruby><ruby>毒<rt>どく</rt></ruby>が<ruby>発<rt>はっ</rt>生<rt>せい</rt></ruby>しやすい<ruby>原<rt>げん</rt>因<rt>いん</rt></ruby>はどれか。<br><ruby>正<rt>ただ</rt></ruby>しいものを<ruby>一<rt>ひと</rt></ruby>つ<ruby>選<rt>えら</rt></ruby>びなさい",
                options: [
                    "<ruby>黄<rt>おう</rt></ruby><ruby>色<rt>しょく</rt></ruby>ブドウ球<ruby>菌<rt>きゅうきん</rt></ruby>",
                    "ノロウイルス",
                    "<ruby>大<rt>だい</rt></ruby><ruby>腸<rt>ちょう</rt></ruby><ruby>菌<rt>きん</rt></ruby>"
                ],
                answer: 1
            },
            {
                question: "<ruby>微<rt>び</rt>生<rt>せい</rt></ruby><ruby>物<rt>ぶつ</rt></ruby>は<ruby>増<rt>ぞう</rt></ruby><ruby>殖<rt>しょく</rt></ruby>しにくい<ruby>環<rt>かん</rt>境<rt>きょう</rt></ruby>はどれか、<br><ruby>正<rt>ただ</rt></ruby>しくないものを<ruby>一<rt>ひと</rt></ruby>つ<ruby>選<rt>えら</rt></ruby>びなさい。",
                options: [
                    "30℃～40℃<ruby>水<rt>すい</rt>分<rt>ぶん</rt></ruby>があり、<ruby>汚<rt>よご</rt></ruby>れがある<ruby>環<rt>かん</rt>境<rt>きょう</rt></ruby>",
                    "<ruby>室<rt>しつ</rt>温<rt>おん</rt></ruby>で、<ruby>汚<rt>よご</rt></ruby>れがある<ruby>環<rt>かん</rt>境<rt>きょう</rt></ruby>",
                    "4℃<ruby>以<rt>い</rt>か<rt>か</rt></ruby><ruby>乾<rt>かん</rt>燥<rt>そう</rt></ruby><ruby>汚<rt>よご</rt></ruby>れがない<ruby>環<rt>かん</rt>境<rt>きょう</rt></ruby>"
                ],
                answer: 2
            },
            {
                question: "<ruby>飲<rt>いん</rt></ruby><ruby>料<rt>りょう</rt></ruby><ruby>製<rt>せい</rt>造<rt>ぞう</rt></ruby><ruby>業<rt>ぎょう</rt></ruby>は何を<ruby>製<rt>せい</rt>造<rt>ぞう</rt></ruby>することですか。<br><ruby>間<rt>ま</rt>違<rt>ちが</rt></ruby>っているものをひとつ選びなさい...",
                options: [
                    "コーヒー。",
                    "<ruby>冷<rt>れい</rt></ruby><ruby>凍<rt>とう</rt></ruby><ruby>食<rt>しょく</rt>品<rt>ひん</rt></ruby>。",
                    "ジュース。"
                ],
                answer: 1
            },
            {
                question: "<ruby>作<rt>さ</rt>業<rt>ぎょう</rt></ruby><ruby>場<rt>ば</rt></ruby>に<ruby>入<rt>はい</rt></ruby>る<ruby>前<rt>まえ</rt></ruby>に<ruby>行<rt>おこな</rt></ruby>う<ruby>流<rt>なが</rt></ruby>れとして、<ruby>正<rt>ただ</rt></ruby>しいものを<ruby>一<rt>ひと</rt></ruby>つ<ruby>選<rt>えら</rt></ruby>びなさい。",
                options: [
                    "<ruby>作<rt>さ</rt>業<rt>ぎょう</rt></ruby><ruby>服<rt>ふく</rt></ruby>を<ruby>正<rt>ただ</rt></ruby>しく<ruby>着<rt>ちゃく</rt>用<rt>よう</rt></ruby>、<ruby>手<rt>て</rt></ruby><ruby>洗<rt>あら</rt></ruby>い、<ruby>粘<rt>ねん</rt></ruby><ruby>着<rt>ちゃく</rt></ruby>ローラー、エアーシャワー",
                    "<ruby>手<rt>て</rt></ruby><ruby>洗<rt>あら</rt></ruby>い、<ruby>作<rt>さ</rt>業<rt>ぎょう</rt></ruby><ruby>服<rt>ふく</rt></ruby>を<ruby>正<rt>ただ</rt></ruby>しく<ruby>着<rt>ちゃく</rt>用<rt>よう</rt></ruby>、<ruby>粘<rt>ねん</rt></ruby><ruby>着<rt>ちゃく</rt></ruby>ローラー",
                    "<ruby>作<rt>さ</rt>業<rt>ぎょう</rt></ruby><ruby>服<rt>ふく</rt></ruby>を<ruby>正<rt>ただ</rt></ruby>しく<ruby>着<rt>ちゃく</rt>用<rt>よう</rt></ruby>ローラー、エアーシャワー、<ruby>手<rt>て</rt></ruby><ruby>洗<rt>あら</rt></ruby>い"
                ],
                answer: 0
            },
            {
                question: "<ruby>作<rt>さ</rt>業<rt>ぎょう</rt></ruby><ruby>中<rt>ちゅう</rt></ruby>について、<ruby>最<rt>もっと</rt></ruby>も<ruby>正<rt>ただ</rt></ruby>しいものを<ruby>選<rt>えら</rt></ruby>びなさい。",
                options: [
                    "<ruby>加<rt>か</rt>熱<rt>ねつ</rt></ruby>したものや<ruby>冷<rt>れい</rt>却<rt>きゃく</rt></ruby>したものを<ruby>長<rt>なが</rt></ruby>く<ruby>室<rt>しつ</rt>温<rt>おん</rt></ruby>で<ruby>放<rt>ほう</rt>置<rt>ち</rt></ruby>しても<ruby>大<rt>だい</rt></ruby>丈<rt>じょう</rt>夫<rt>ぶ</rt></ruby>",
                    "トイレに<ruby>行<rt>い</rt></ruby>った<ruby>後<rt>あと</rt></ruby>、<ruby>洗<rt>せん</rt>剤<rt>ざい</rt></ruby>で<ruby>手<rt>て</rt></ruby><ruby>洗<rt>あら</rt></ruby>いします。<ruby>消<rt>しょう</rt>毒<rt>どく</rt></ruby><ruby>液<rt>えき</rt></ruby>しなくても<ruby>大<rt>だい</rt></ruby>丈<rt>じょう</rt>夫<rt>ぶ</rt></ruby>",
                    "ムダ<ruby>話<rt>ばなし</rt></ruby>をしない。<ruby>機<rt>き</rt>械<rt>かい</rt></ruby>や<ruby>製<rt>せい</rt>品<rt>ひん</rt></ruby>の<ruby>異<rt>い</rt>常<rt>じょう</rt></ruby>が見つかった<ruby>時<rt>とき</rt></ruby>、<ruby>機<rt>き</rt>械<rt>かい</rt></ruby>ラインを<ruby>止<rt>と</rt></ruby>めて、すぐに<ruby>責<rt>せき</rt>任<rt>にん</rt></ruby><ruby>者<rt>しゃ</rt></ruby>に<ruby>報<rt>ほう</rt>告<rt>こく</rt></ruby>する"
                ],
                answer: 2
            },
            {
                question: "<ruby>衛<rt>えい</rt>生<rt>せい</rt></ruby>とは何ですか",
                options: [
                    "<ruby>命<rt>いのち</rt></ruby>を<ruby>守<rt>まも</rt></ruby>ることです",
                    "<ruby>食<rt>しょく</rt>品<rt>ひん</rt></ruby>を<ruby>食<rt>た</rt></ruby>べた<ruby>人<rt>ひと</rt></ruby>は<ruby>病<rt>びょう</rt>気<rt>き</rt></ruby>になること",
                    "<ruby>病<rt>びょう</rt>気<rt>き</rt></ruby>になったりケガをしたりすること。"
                ],
                answer: 0
            },
            {
                question: "<ruby>食<rt>しょく</rt>品<rt>ひん</rt></ruby><ruby>製<rt>せい</rt>造<rt>ぞう</rt></ruby>の<ruby>衛<rt>えい</rt>生<rt>せい</rt></ruby><ruby>管<rt>かん</rt>理<rt>り</rt></ruby>とは何を<ruby>管<rt>かん</rt>理<rt>り</rt></ruby>することですか。<br><ruby>正<rt>ただ</rt></ruby>しいものを<ruby>一<rt>ひと</rt></ruby>つ<ruby>選<rt>えら</rt></ruby>びなさい",
                options: [
                    "<ruby>労<rt>ろう</rt>働<rt>どう</rt></ruby><ruby>安<rt>あん</rt>全<rt>ぜん</rt></ruby>の<ruby>管<rt>かん</rt>理<rt>り</rt></ruby>です",
                    "<ruby>食<rt>しょく</rt>品<rt>ひん</rt></ruby>を<ruby>作<rt>つく</rt></ruby>る<ruby>管<rt>かん</rt>理<rt>り</rt></ruby>です。",
                    "<ruby>消<rt>しょう</rt>費<rt>ひ</rt></ruby><ruby>者<rt>しゃ</rt></ruby>の<ruby>管<rt>かん</rt>理<rt>り</rt></ruby>です。"
                ],
                answer: 1
            },
            {
                question: "<ruby>金<rt>きん</rt>属<rt>ぞく</rt></ruby>以<ruby>外<rt>がい</rt></ruby>の<ruby>異<rt>い</rt></ruby><ruby>物<rt>ぶつ</rt></ruby>（石、ガラスなど）を見つけることができる<ruby>機<rt>き</rt>械<rt>かい</rt></ruby>として、<ruby>正<rt>ただ</rt></ruby>しいものを<ruby>一<rt>ひと</rt></ruby>つ<ruby>選<rt>えら</rt></ruby>びなさい",
                options: [
                    "<ruby>金<rt>きん</rt>属<rt>ぞく</rt></ruby><ruby>検<rt>けん</rt>査<rt>さ</rt></ruby><ruby>機<rt>き</rt></ruby>",
                    "X<ruby>線<rt>せん</rt></ruby><ruby>異<rt>い</rt></ruby><ruby>物<rt>ぶつ</rt></ruby><ruby>検<rt>けん</rt>査<rt>さ</rt></ruby><ruby>機<rt>き</rt></ruby>",
                    "<ruby>日<rt>ひ</rt></ruby><ruby>付<rt>づ</rt></ruby><ruby>検<rt>けん</rt>査<rt>さ</rt></ruby><ruby>機<rt>き</rt></ruby>"
                ],
                answer: 1
            },
            {
                question: "<ruby>製<rt>せい</rt>品<rt>ひん</rt></ruby>の<ruby>保<rt>ほ</rt>管<rt>かん</rt></ruby><ruby>管<rt>かん</rt>理<rt>り</rt></ruby>について、<ruby>最<rt>もっと</rt></ruby>も<ruby>正<rt>ただ</rt></ruby>しいものを<ruby>一<rt>ひと</rt></ruby>つ<ruby>選<rt>えら</rt></ruby>びなさい。",
                options: [
                    "<ruby>一<rt>いっ</rt>般<rt>ぱん</rt></ruby><ruby>的<rt>てき</rt></ruby>に<ruby>冷<rt>れい</rt>凍<rt>とう</rt></ruby><ruby>庫<rt>こ</rt></ruby>は-15℃<ruby>以<rt>い</rt>か<rt>か</rt></ruby>、<ruby>冷<rt>れい</rt>蔵<rt>ぞう</rt></ruby><ruby>庫<rt>こ</rt></ruby>は10℃<ruby>以<rt>い</rt>か<rt>か</rt></ruby>が<ruby>基<rt>き</rt>準<rt>じゅん</rt></ruby>となる。",
                    "<ruby>保<rt>ほ</rt>管<rt>かん</rt></ruby><ruby>用<rt>よう</rt></ruby>サンプルを<ruby>適<rt>てき</rt></ruby><ruby>当<rt>とう</rt></ruby>に<ruby>抽<rt>ちゅう</rt></ruby><ruby>出<rt>しゅつ</rt></ruby>して<ruby>保<rt>ほ</rt>管<rt>かん</rt></ruby>する。",
                    "<ruby>製<rt>せい</rt>品<rt>ひん</rt></ruby>の<ruby>微<rt>び</rt>生<rt>せい</rt></ruby><ruby>物<rt>ぶつ</rt></ruby><ruby>検<rt>けん</rt>査<rt>さ</rt></ruby><ruby>項<rt>こう</rt>目<rt>もく</rt></ruby>はそれぞれの<ruby>工<rt>こう</rt></ruby><ruby>場<rt>じょう</rt></ruby>で<ruby>決<rt>き</rt></ruby>まる。"
                ],
                answer: 0
            },
            {
                question: "アレルギー<ruby>食<rt>しょく</rt>品<rt>ひん</rt></ruby>の<ruby>特<rt>とく</rt>定<rt>てい</rt></ruby><ruby>原<rt>げん</rt>材<rt>ざい</rt></ruby><ruby>料<rt>りょう</rt></ruby>として<ruby>表<rt>ひょう</rt>示<rt>じ</rt></ruby><ruby>義<rt>ぎ</rt>務<rt>む</rt></ruby>がある8つの<ruby>食<rt>しょく</rt>品<rt>ひん</rt></ruby>で<ruby>正<rt>ただ</rt></ruby>しいものはどれでしょうか。<ruby>一<rt>ひと</rt></ruby>つ<ruby>選<rt>えら</rt></ruby>びなさい。",
                options: [
                    "そば、たまご、ピーナッツ、こむぎ、たまねぎ、えび、ぎゅうにく、くるみ",
                    "えび、かに、<ruby>牡<rt>か</rt></ruby><ruby>蠣<rt>き</rt></ruby>、にんじん、ぎゅうにく、りんご、オレンジ、そば",
                    "えび、かに、こむぎ、そば、たまご、<ruby>乳<rt>にゅう</rt></ruby>、<ruby>落<rt>らっ</rt>花<rt>か</rt>生<rt>せい</rt></ruby>、くるみ"
                ],
                answer: 2
            },
            {
                question: "ヒスタミンはどこにありますか。<ruby>正<rt>ただ</rt></ruby>しいものを<ruby>一<rt>ひと</rt></ruby>つ<ruby>選<rt>えら</rt></ruby>びなさい。",
                options: [
                    "<ruby>果<rt>くだ</rt></ruby><ruby>物<rt>もの</rt></ruby>。",
                    "<ruby>魚<rt>さかな</rt></ruby>",
                    "<ruby>牛<rt>ぎゅう</rt></ruby><ruby>乳<rt>にゅう</rt></ruby>"
                ],
                answer: 1
            },
            {
                question: "ヒスタミン<ruby>食<rt>しょく</rt>中<rt>ちゅう</rt></ruby><ruby>毒<rt>どく</rt></ruby>を<ruby>防<rt>ふせ</rt></ruby>ぐためにどうしたらいいのか<ruby>一<rt>ひと</rt></ruby>つ、<ruby>正<rt>ただ</rt></ruby>しいものを<ruby>選<rt>えら</rt></ruby>んでください",
                options: [
                    "<ruby>魚<rt>さかな</rt></ruby>を取った<ruby>後<rt>あと</rt></ruby>ゆっくり<ruby>冷<rt>れい</rt></ruby><ruby>凍<rt>とう</rt></ruby>してもいいです。",
                    "マグロやサバなどの<ruby>赤<rt>あか</rt></ruby><ruby>身<rt>み</rt></ruby><ruby>魚<rt>ざかな</rt></ruby>はどこでも<ruby>保<rt>ほ</rt>存<rt>ぞん</rt></ruby>できる",
                    "<ruby>魚<rt>さかな</rt></ruby>を受<ruby>け<rt>う</rt></ruby><ruby>入<rt>い</rt></ruby>れたすぐ<ruby>冷<rt>れい</rt></ruby><ruby>凍<rt>とう</rt></ruby>したらいいです"
                ],
                answer: 2
            },
            {
                question: "<ruby>冷<rt>れい</rt></ruby><ruby>却<rt>きゃく</rt></ruby><ruby>方<rt>ほう</rt>法<rt>ほう</rt></ruby>について、<ruby>間<rt>ま</rt>違<rt>ちが</rt></ruby>っているものを<ruby>一<rt>ひと</rt></ruby>つ<ruby>選<rt>えら</rt></ruby>びなさい",
                options: [
                    "<ruby>風<rt>ふう</rt></ruby><ruby>冷<rt>れい</rt></ruby>",
                    "<ruby>冷<rt>れい</rt></ruby><ruby>蔵<rt>ぞう</rt></ruby><ruby>庫<rt>こ</rt></ruby>",
                    "<ruby>水<rt>すい</rt></ruby><ruby>冷<rt>れい</rt></ruby>"
                ],
                answer: 1
            },
            {
                question: "<ruby>管<rt>かん</rt>理<rt>り</rt></ruby><ruby>基<rt>き</rt>準<rt>じゅん</rt></ruby>から<ruby>逸<rt>いつ</rt>脱<rt>だつ</rt></ruby>した場<ruby>合<rt>ばあい</rt></ruby>、<ruby>改<rt>かい</rt>善<rt>ぜん</rt></ruby><ruby>措<rt>そ</rt>置<rt>ち</rt></ruby>のため、なにをしなければなりませんか。<br><ruby>間<rt>ま</rt>違<rt>ちが</rt></ruby>っているものを<ruby>一<rt>ひと</rt></ruby>つ<ruby>選<rt>えら</rt></ruby>びなさい。",
                options: [
                    "<ruby>食<rt>しょく</rt>品<rt>ひん</rt></ruby>の<ruby>中<rt>なか</rt></ruby>に<ruby>危<rt>き</rt>害<rt>がい</rt></ruby><ruby>要<rt>よう</rt></ruby><ruby>因<rt>いん</rt></ruby>が<ruby>残<rt>のこ</rt></ruby>らないようにしなければなりません。",
                    "<ruby>改<rt>かい</rt>善<rt>ぜん</rt></ruby><ruby>措<rt>そ</rt>置<rt>ち</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>うまでに、作った<ruby>食<rt>しょく</rt>品<rt>ひん</rt></ruby>を<ruby>捨<rt>す</rt></ruby>てるかつくり<ruby>直<rt>なお</rt></ruby>すかを<ruby>決<rt>き</rt></ruby>めなくてもいい。",
                    "<ruby>改<rt>かい</rt>善<rt>ぜん</rt></ruby><ruby>措<rt>そ</rt>置<rt>ち</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>うときは、<ruby>必<rt>かなら</rt></ruby>ず<ruby>責<rt>せき</rt>任<rt>にん</rt></ruby><ruby>者<rt>しゃ</rt></ruby>の<ruby>指<rt>し</rt>示<rt>じ</rt></ruby>に<ruby>従<rt>したが</rt></ruby>ってください。"
                ],
                answer: 1
            },
            {
                question: "<ruby>微<rt>び</rt>生<rt>せい</rt></ruby><ruby>物<rt>ぶつ</rt></ruby>を<ruby>増<rt>ぞう</rt></ruby><ruby>殖<rt>しょく</rt></ruby>させないための<ruby>方<rt>ほう</rt>法<rt>ほう</rt></ruby>について、<ruby>正<rt>ただ</rt></ruby>しいものを<ruby>一<rt>ひと</rt></ruby>つ<ruby>選<rt>えら</rt></ruby>びなさい。",
                options: [
                    "<ruby>冷<rt>れい</rt></ruby><ruby>蔵<rt>ぞう</rt></ruby><ruby>庫<rt>こ</rt></ruby>から取り<ruby>出<rt>だ</rt></ruby>した<ruby>食<rt>しょく</rt>品<rt>ひん</rt></ruby>は<ruby>常<rt>じょう</rt>温<rt>おん</rt></ruby>で<ruby>長<rt>なが</rt></ruby>く<ruby>放<rt>ほう</rt>置<rt>ち</rt></ruby>する。",
                    "<ruby>加<rt>か</rt>熱<rt>ねつ</rt></ruby>したものを<ruby>室<rt>しつ</rt>温<rt>おん</rt></ruby>で<ruby>温<rt>おん</rt>度<rt>ど</rt></ruby>をゆっくり<ruby>下<rt>さ</rt></ruby>げる。",
                    "<ruby>世<rt>せ</rt>代<rt>だい</rt></ruby><ruby>交<rt>こう</rt>代<rt>だい</rt></ruby><ruby>時<rt>じ</rt>間<rt>かん</rt></ruby>があるので、<ruby>時<rt>じ</rt>間<rt>かん</rt></ruby>もコントロールするのが<ruby>必<rt>ひつ</rt>要<rt>よう</rt></ruby>である。"
                ],
                answer: 2
            },
            {
                question: "<ruby>作<rt>さ</rt>業<rt>ぎょう</rt></ruby><ruby>着<rt>ぎ</rt></ruby>について、<ruby>間<rt>ま</rt>違<rt>ちが</rt></ruby>っているものを<ruby>一<rt>ひと</rt></ruby>つ<ruby>選<rt>えら</rt></ruby>びなさい。",
                options: [
                    "<ruby>作<rt>さ</rt>業<rt>ぎょう</rt></ruby><ruby>着<rt>ぎ</rt></ruby>は、いつも<ruby>清<rt>せい</rt>潔<rt>けつ</rt></ruby>なものを<ruby>着<rt>き</rt></ruby>なければならない。",
                    "<ruby>清<rt>せい</rt>潔<rt>けつ</rt></ruby>な<ruby>服<rt>ふく</rt></ruby>なら、なにを<ruby>着<rt>き</rt></ruby>ても<ruby>良<rt>よ</rt></ruby>い。",
                    "<ruby>作<rt>さ</rt>業<rt>ぎょう</rt></ruby><ruby>着<rt>ぎ</rt></ruby>は、決められた<ruby>着<rt>き</rt></ruby>かたをしなければならない。"
                ],
                answer: 1
            },
            {
                question: "<ruby>細<rt>さい</rt>菌<rt>きん</rt></ruby>が<ruby>原<rt>げん</rt>因<rt>いん</rt></ruby>の<ruby>食<rt>しょく</rt>中<rt>ちゅう</rt></ruby><ruby>毒<rt>どく</rt></ruby>を<ruby>発<rt>はっ</rt>生<rt>せい</rt></ruby>させないために<ruby>食<rt>しょく</rt>中<rt>ちゅう</rt></ruby><ruby>毒<rt>どく</rt></ruby><ruby>予<rt>よ</rt>防<rt>ぼう</rt></ruby>の<ruby>原<rt>げん</rt>則<rt>そく</rt></ruby>がいくつありますか。",
                options: [
                    "7<ruby>原<rt>げん</rt>則<rt>そく</rt></ruby>",
                    "4<ruby>原<rt>げん</rt>則<rt>そく</rt></ruby>",
                    "3<ruby>原<rt>げん</rt>則<rt>そく</rt></ruby>"
                ],
                answer: 2
            },
            {
                question: "<ruby>手<rt>て</rt></ruby><ruby>袋<rt>ぶくろ</rt></ruby>をつける<ruby>理<rt>り</rt>由<rt>ゆう</rt></ruby>として、<ruby>正<rt>ただ</rt></ruby>しいものを<ruby>一<rt>ひと</rt></ruby>つ<ruby>選<rt>えら</rt></ruby>びなさい",
                options: [
                    "<ruby>手<rt>て</rt></ruby>の<ruby>表<rt>ひょう</rt>面<rt>めん</rt></ruby>にいる<ruby>微<rt>び</rt>生<rt>せい</rt></ruby><ruby>物<rt>ぶつ</rt></ruby>が、<ruby>食<rt>しょく</rt>品<rt>ひん</rt></ruby>につかないようにするため。",
                    "<ruby>手<rt>て</rt></ruby>が<ruby>汚<rt>よご</rt></ruby>れないようにするため。",
                    "<ruby>手<rt>て</rt></ruby>が<ruby>冷<rt>つめ</rt></ruby>たくならないようにするため。"
                ],
                answer: 0
            },
            {
                question: "<ruby>作<rt>さ</rt>業<rt>ぎょう</rt></ruby><ruby>場<rt>ば</rt></ruby>に持っていってよいものを<ruby>一<rt>ひと</rt></ruby>つ<ruby>選<rt>えら</rt></ruby>びなさい",
                options: [
                    "<ruby>金<rt>きん</rt>銭<rt>せん</rt></ruby>やたばこ",
                    "飴や<ruby>薬<rt>くすり</rt></ruby>",
                    "ロッカー<ruby>鍵<rt>かぎ</rt></ruby>"
                ],
                answer: 2
            },
            {
                question: "<ruby>器<rt>き</rt>具<rt>ぐ</rt></ruby>を<ruby>洗<rt>あら</rt></ruby>うとき使うものについて、<ruby>正<rt>ただ</rt></ruby>しいものを<ruby>一<rt>ひと</rt></ruby>つ<ruby>選<rt>えら</rt></ruby>びなさい。",
                options: [
                    "<ruby>殺<rt>さっ</rt>菌<rt>きん</rt></ruby><ruby>剤<rt>ざい</rt></ruby>を使って<ruby>洗<rt>あら</rt></ruby>う。",
                    "アルコールを使って<ruby>洗<rt>あら</rt></ruby>う。",
                    "<ruby>洗<rt>せん</rt>浄<rt>じょう</rt></ruby><ruby>剤<rt>ざい</rt></ruby>を使って<ruby>洗<rt>あら</rt></ruby>う。"
                ],
                answer: 2
            },
            {
                question: "<ruby>殺<rt>さっ</rt>菌<rt>きん</rt></ruby><ruby>剤<rt>ざい</rt></ruby>を使って<ruby>調<rt>ちょう</rt>理<rt>り</rt></ruby><ruby>器<rt>き</rt>具<rt>ぐ</rt></ruby>を<ruby>消<rt>しょう</rt>毒<rt>どく</rt></ruby>する<ruby>方<rt>ほう</rt>法<rt>ほう</rt></ruby>として、<ruby>正<rt>ただ</rt></ruby>しいものを<ruby>一<rt>ひと</rt></ruby>つ<ruby>選<rt>えら</rt></ruby>びなさい。",
                options: [
                    "<ruby>調<rt>ちょう</rt>理<rt>り</rt></ruby><ruby>器<rt>き</rt>具<rt>ぐ</rt></ruby>を<ruby>洗<rt>あら</rt></ruby>う<ruby>前<rt>まえ</rt></ruby>に<ruby>消<rt>しょう</rt>毒<rt>どく</rt></ruby>する。",
                    "<ruby>消<rt>しょう</rt>毒<rt>どく</rt></ruby>する<ruby>前<rt>まえ</rt></ruby>に<ruby>調<rt>ちょう</rt>理<rt>り</rt></ruby><ruby>器<rt>き</rt>具<rt>ぐ</rt></ruby>に<ruby>水<rt>みず</rt></ruby>をつける。",
                    "<ruby>調<rt>ちょう</rt>理<rt>り</rt></ruby><ruby>器<rt>き</rt>具<rt>ぐ</rt></ruby>を<ruby>洗<rt>あら</rt></ruby>って<ruby>乾<rt>かわ</rt></ruby>かしてから<ruby>消<rt>しょう</rt>毒<rt>どく</rt></ruby>する。"
                ],
                answer: 2
            },
            {
                question: "<ruby>殺<rt>さっ</rt>菌<rt>きん</rt></ruby>した<ruby>食<rt>しょく</rt>品<rt>ひん</rt></ruby>の<ruby>扱<rt>あつか</rt></ruby>い<ruby>方<rt>かた</rt></ruby>について、<ruby>間<rt>ま</rt>違<rt>ちが</rt></ruby>っているものを<ruby>一<rt>ひと</rt></ruby>つ<ruby>選<rt>えら</rt></ruby>びなさい。",
                options: [
                    "<ruby>手<rt>て</rt></ruby><ruby>袋<rt>ぶくろ</rt></ruby>をつけていない<ruby>手<rt>て</rt></ruby>で<ruby>食<rt>しょく</rt>品<rt>ひん</rt></ruby>を持つ。",
                    "<ruby>手<rt>て</rt></ruby><ruby>袋<rt>ぶくろ</rt></ruby>をつけた<ruby>手<rt>て</rt></ruby>で<ruby>食<rt>しょく</rt>品<rt>ひん</rt></ruby>を持つ。",
                    "<ruby>消<rt>しょう</rt>毒<rt>どく</rt></ruby>した<ruby>道<rt>どう</rt>具<rt>ぐ</rt></ruby>を使って<ruby>食<rt>しょく</rt>品<rt>ひん</rt></ruby>を持つ。"
                ],
                answer: 0
            },
            {
                question: "<ruby>食<rt>しょく</rt>材<rt>ざい</rt></ruby>の<ruby>扱<rt>あつか</rt></ruby>い<ruby>方<rt>かた</rt></ruby>について、<ruby>違<rt>ちが</rt></ruby>っているものを<ruby>一<rt>ひと</rt></ruby>つ<ruby>選<rt>えら</rt></ruby>びなさい。",
                options: [
                    "<ruby>冷<rt>れい</rt></ruby><ruby>凍<rt>とう</rt></ruby><ruby>品<rt>ひん</rt></ruby>がとけていたら、また<ruby>冷<rt>れい</rt></ruby><ruby>凍<rt>とう</rt></ruby>する。",
                    "<ruby>砂<rt>さ</rt>糖<rt>とう</rt></ruby>や<ruby>塩<rt>しお</rt></ruby>は、<ruby>温<rt>おん</rt>度<rt>ど</rt></ruby><ruby>湿<rt>しつ</rt>度<rt>ど</rt></ruby>が<ruby>低<rt>ひく</rt></ruby>いところに<ruby>保<rt>ほ</rt>管<rt>かん</rt></ruby>する。",
                    "<ruby>小<rt>こ</rt></ruby><ruby>麦<rt>むぎ</rt></ruby><ruby>粉<rt>こ</rt></ruby>やでんぷんは、<ruby>水<rt>みず</rt></ruby>にぬれないように<ruby>保<rt>ほ</rt>管<rt>かん</rt></ruby>する。"
                ],
                answer: 0
            },
            {
                question: "アレルギーがほかの<ruby>食<rt>しょく</rt>品<rt>ひん</rt></ruby>に混ざってしまうことを防ぐために、なにをしますか。<br><ruby>間<rt>ま</rt>違<rt>ちが</rt></ruby>っているものを<ruby>一<rt>ひと</rt></ruby>つ<ruby>選<rt>えら</rt></ruby>びなさい",
                options: [
                    "<ruby>特<rt>とく</rt>定<rt>てい</rt></ruby><ruby>原<rt>げん</rt>材<rt>ざい</rt></ruby><ruby>料<rt>りょう</rt></ruby>を含み<ruby>製<rt>せい</rt>品<rt>ひん</rt></ruby>は一<ruby>日<rt>にち</rt></ruby>の<ruby>最<rt>さい</rt></ruby><ruby>初<rt>しょ</rt></ruby>に<ruby>製<rt>せい</rt>造<rt>ぞう</rt></ruby>する。",
                    "アレルギー<ruby>物<rt>ぶっ</rt>質<rt>しつ</rt></ruby>を言ふくむ<ruby>原<rt>げん</rt>材<rt>ざい</rt></ruby><ruby>料<rt>りょう</rt></ruby>とアレルギー<ruby>物<rt>ぶっ</rt>質<rt>しつ</rt></ruby>を含まない<ruby>原<rt>げん</rt>材<rt>ざい</rt></ruby><ruby>料<rt>りょう</rt></ruby>と<ruby>別<rt>べつ</rt>々<rt>べつ</rt></ruby>に<ruby>保<rt>ほ</rt>管<rt>かん</rt></ruby>する。",
                    "アレルギー<ruby>物<rt>ぶっ</rt>質<rt>しつ</rt></ruby>を<ruby>含<rt>ふく</rt></ruby>む<ruby>原<rt>げん</rt>材<rt>ざい</rt></ruby><ruby>料<rt>りょう</rt></ruby>とアレルギー<ruby>物<rt>ぶっ</rt>質<rt>しつ</rt></ruby>を<ruby>含<rt>ふく</rt></ruby>まない<ruby>材<rt>ざい</rt>料<rt>りょう</rt></ruby>を<ruby>同<rt>おな</rt></ruby>じラインで<ruby>製<rt>せい</rt>造<rt>ぞう</rt></ruby>する<ruby>場<rt>ば</rt>合<rt>あい</rt></ruby>、<ruby>徹<rt>てっ</rt>底<rt>てい</rt></ruby><ruby>的<rt>てき</rt></ruby>に<ruby>洗<rt>せん</rt>浄<rt>じょう</rt></ruby>する。"
                ],
                answer: 1
            },
            {
                question: "<ruby>寄<rt>き</rt>生<rt>せい</rt></ruby><ruby>虫<rt>ちゅう</rt></ruby><ruby>生<rt>せい</rt></ruby><ruby>物<rt>ぶつ</rt></ruby>の<ruby>名<rt>な</rt>前<rt>まえ</rt></ruby>は何ですか。<ruby>正<rt>ただ</rt></ruby>しいものを<ruby>一<rt>ひと</rt></ruby>つ<ruby>選<rt>えら</rt></ruby>びなさい",
                options: [
                    "おにぎり、サンドイッチ",
                    "サバ、イカ",
                    "<ruby>人<rt>ひと</rt></ruby>の<ruby>皮<rt>ひ</rt>膚<rt>ふ</rt></ruby>や<ruby>傷<rt>きず</rt></ruby><ruby>口<rt>ぐち</rt></ruby>"
                ],
                answer: 1
            },
            {
                question: "<ruby>殺<rt>さっ</rt>菌<rt>きん</rt></ruby><ruby>剤<rt>ざい</rt></ruby>の<ruby>扱<rt>あつか</rt></ruby>い<ruby>方<rt>かた</rt></ruby>として、<ruby>間<rt>ま</rt>違<rt>ちが</rt></ruby>っているものを<ruby>一<rt>ひと</rt></ruby>つ<ruby>選<rt>えら</rt></ruby>びなさい",
                options: [
                    "<ruby>殺<rt>さっ</rt>菌<rt>きん</rt></ruby><ruby>剤<rt>ざい</rt></ruby>は、どこで<ruby>保<rt>ほ</rt>管<rt>かん</rt></ruby>しても<ruby>良<rt>よ</rt></ruby>い。",
                    "<ruby>殺<rt>さっ</rt>菌<rt>きん</rt></ruby><ruby>剤<rt>ざい</rt></ruby>を<ruby>容<rt>よう</rt>器<rt>き</rt></ruby>に移すときは、<ruby>必<rt>かなら</rt></ruby>ず移した<ruby>容<rt>よう</rt>器<rt>き</rt></ruby>に「<ruby>殺<rt>さっ</rt>菌<rt>きん</rt></ruby><ruby>剤<rt>ざい</rt></ruby>」と<ruby>表<rt>ひょう</rt>示<rt>じ</rt></ruby>する。",
                    "<ruby>目<rt>め</rt></ruby>に<ruby>入<rt>はい</rt></ruby>らないようにする。"
                ],
                answer: 0
            },
            {
                question: "<ruby>手<rt>て</rt></ruby><ruby>洗<rt>あら</rt></ruby>いについて、<ruby>間<rt>ま</rt>違<rt>ちが</rt></ruby>っているものを<ruby>一<rt>ひと</rt></ruby>つ<ruby>選<rt>えら</rt></ruby>びなさい",
                options: [
                    "<ruby>手<rt>て</rt></ruby>についた<ruby>汚<rt>よご</rt></ruby>れや<ruby>微<rt>び</rt>生<rt>せい</rt></ruby><ruby>物<rt>ぶつ</rt></ruby>をとるために<ruby>行<rt>おこな</rt></ruby>う。",
                    "<ruby>爪<rt>つめ</rt></ruby>の中は洗わなくても<ruby>良<rt>よ</rt></ruby>い。",
                    "<ruby>指<rt>ゆび</rt></ruby>の<ruby>間<rt>あいだ</rt></ruby>や<ruby>手<rt>て</rt></ruby><ruby>首<rt>くび</rt></ruby>までしっかり<ruby>洗<rt>あら</rt></ruby>う。"
                ],
                answer: 1
            },
            {
                question: "<ruby>殺<rt>さっ</rt>菌<rt>きん</rt></ruby><ruby>剤<rt>ざい</rt></ruby>を使うときに<ruby>注<rt>ちゅう</rt>意<rt>い</rt></ruby>する<ruby>点<rt>てん</rt></ruby>について、<ruby>間<rt>ま</rt>違<rt>ちが</rt></ruby>っているものを<ruby>一<rt>ひと</rt></ruby>つ<ruby>選<rt>えら</rt></ruby>びなさい。",
                options: [
                    "<ruby>殺<rt>さっ</rt>菌<rt>きん</rt></ruby><ruby>剤<rt>ざい</rt></ruby>の<ruby>濃<rt>のう</rt>度<rt>ど</rt></ruby>",
                    "<ruby>殺<rt>さっ</rt>菌<rt>きん</rt></ruby>する<ruby>時<rt>じ</rt>間<rt>かん</rt></ruby>",
                    "<ruby>殺<rt>さっ</rt>菌<rt>きん</rt></ruby><ruby>剤<rt>ざい</rt></ruby>の<ruby>温<rt>おん</rt>度<rt>ど</rt></ruby>"
                ],
                answer: 2
            },
            {
                question: "セレウス<ruby>菌<rt>きん</rt></ruby>による<ruby>食<rt>しょく</rt>中<rt>ちゅう</rt></ruby><ruby>毒<rt>どく</rt></ruby>の<ruby>原<rt>げん</rt>因<rt>いん</rt></ruby>となる<ruby>食<rt>しょく</rt>品<rt>ひん</rt></ruby>はどれですか",
                options: [
                    "<ruby>牡<rt>か</rt></ruby><ruby>蠣<rt>き</rt></ruby>などの二<ruby>枚<rt>まい</rt></ruby><ruby>貝<rt>がい</rt></ruby>",
                    "<ruby>米<rt>こめ</rt></ruby>や<ruby>小<rt>こ</rt></ruby><ruby>麦<rt>むぎ</rt></ruby>などを使って<ruby>調<rt>ちょう</rt>理<rt>り</rt></ruby>された<ruby>食<rt>しょく</rt>品<rt>ひん</rt></ruby>",
                    "<ruby>缶<rt>かん</rt>詰<rt>づめ</rt></ruby>"
                ],
                answer: 1
            },
            {
                question: "<ruby>食<rt>しょく</rt>肉<rt>にく</rt></ruby>、<ruby>魚<rt>ぎょ</rt>介<rt>かい</rt></ruby><ruby>類<rt>るい</rt></ruby>は、何度以<ruby>か<rt>か</rt></ruby>で<ruby>保<rt>ほ</rt>管<rt>かん</rt></ruby>すればいいですか",
                options: [
                    "4℃<ruby>以<rt>い</rt>か<rt>か</rt></ruby>",
                    "10℃<ruby>以<rt>い</rt>か<rt>か</rt></ruby>",
                    "15℃<ruby>以<rt>い</rt>か<rt>か</rt></ruby>"
                ],
                answer: 0
            },
            {
                question: "<ruby>熱<rt>ねっ</rt>中<rt>ちゅう</rt></ruby><ruby>症<rt>しょう</rt></ruby>の<ruby>症<rt>しょう</rt>状<rt>じょう</rt></ruby>について、<ruby>間<rt>ま</rt>違<rt>ちが</rt></ruby>っているものを<ruby>一<rt>ひと</rt></ruby>つ<ruby>選<rt>えら</rt></ruby>びなさい。",
                options: [
                    "めまい、たちくらみ、<ruby>手<rt>て</rt></ruby><ruby>足<rt>あし</rt></ruby>のしびれ、<ruby>気<rt>き</rt></ruby><ruby>分<rt>ぶん</rt></ruby>が<ruby>悪<rt>わる</rt></ruby>い",
                    "<ruby>発<rt>はつ</rt>熱<rt>ねつ</rt></ruby>、<ruby>激<rt>はげ</rt></ruby>しい<ruby>痛<rt>いた</rt></ruby>い<ruby>腹<rt>ふく</rt>痛<rt>つう</rt></ruby>、<ruby>下<rt>げ</rt>痢<rt>り</rt></ruby>",
                    "<ruby>返<rt>へん</rt>事<rt>じ</rt></ruby>がおかしい、<ruby>意<rt>い</rt>識<rt>しき</rt></ruby><ruby>消<rt>しょう</rt>失<rt>しつ</rt></ruby>、けいれん、からだが<ruby>熱<rt>あつ</rt></ruby>い"
                ],
                answer: 1
            },
            {
                question: "<ruby>表<rt>ひょう</rt></ruby>はソーセージ1セット（5<ruby>本<rt>ほん</rt></ruby>）の<ruby>配<rt>はい</rt>合<rt>ごう</rt></ruby><ruby>例<rt>れい</rt></ruby>です。この<ruby>配<rt>はい</rt>合<rt>ごう</rt></ruby>に<ruby>従<rt>したが</rt></ruby>うと<ruby>豚<rt>ぶた</rt></ruby>ひき<ruby>肉<rt>にく</rt></ruby>6kgからどれだけのソーセージを作れるか",
                options: [
                    "20<ruby>本<rt>ほん</rt></ruby>",
                    "120<ruby>本<rt>ほん</rt></ruby>",
                    "180<ruby>本<rt>ほん</rt></ruby>"
                ],
                answer: 1
            },
            {
                question: "10%の<ruby>次<rt>じ</rt>亜<rt>あ</rt>塩<rt>えん</rt></ruby><ruby>素<rt>そ</rt></ruby><ruby>酸<rt>さん</rt></ruby>ナトリウム(NaOCl)の<ruby>溶<rt>よう</rt></ruby><ruby>液<rt>えき</rt></ruby>があります。5ml<ruby>溶<rt>よう</rt></ruby><ruby>液<rt>えき</rt></ruby>を<ruby>使<rt>つか</rt></ruby>用し、200ppm<ruby>次<rt>じ</rt>亜<rt>あ</rt>塩<rt>えん</rt></ruby><ruby>素<rt>そ</rt></ruby><ruby>酸<rt>さん</rt></ruby>ナトリウム(NaOCl)を作るために、どれぐらい<ruby>水<rt>みず</rt></ruby>が<ruby>必<rt>ひつ</rt>要<rt>よう</rt></ruby>ですか。<ruby>正<rt>ただ</rt></ruby>しいものを<ruby>一<rt>ひと</rt></ruby>つ<ruby>選<rt>えら</rt></ruby>びなさい。(200ppm=0.02%)",
                options: [
                    "2L",
                    "2.5L",
                    "3L"
                ],
                answer: 1
            },
            {
                question: "トレーを<ruby>両<rt>りょう</rt></ruby><ruby>手<rt>て</rt></ruby>で持物、歩いて<ruby>移<rt>い</rt>動<rt>どう</rt></ruby>しようとしたところ、<ruby>濡<rt>ぬ</rt></ruby>れた<ruby>床<rt>ゆか</rt></ruby>で<ruby>滑<rt>すべ</rt></ruby>って<ruby>転<rt>てん</rt>倒<rt>とう</rt></ruby>しそうになった。この<ruby>事<rt>じ</rt>故<rt>こ</rt></ruby>を<ruby>防<rt>ふせ</rt></ruby>ぐために、どうしたらいいですか。<ruby>正<rt>ただ</rt></ruby>しいものを<ruby>一<rt>ひと</rt></ruby>つ<ruby>選<rt>えら</rt></ruby>びなさい",
                options: [
                    "<ruby>床<rt>ゆか</rt></ruby>の<ruby>水<rt>みず</rt></ruby>をきちんとふき取る。",
                    "<ruby>片<rt>かた</rt></ruby><ruby>手<rt>て</rt></ruby>で持つ。",
                    "<ruby>両<rt>りょう</rt></ruby><ruby>手<rt>て</rt></ruby>で持つ。"
                ],
                answer: 0
            },
            {
                question: "パン<ruby>箱<rt>ばこ</rt></ruby>を<ruby>両<rt>りょう</rt></ruby><ruby>手<rt>て</rt></ruby>で持ち、トラックに向かって<ruby>停<rt>てい</rt>車<rt>しゃ</rt></ruby><ruby>場<rt>じょう</rt></ruby>を歩いていたとき、<ruby>通<rt>つう</rt>路<rt>ろ</rt></ruby>に置かれた<ruby>空<rt>から</rt></ruby><ruby>箱<rt>ばこ</rt></ruby>につまずき<ruby>転<rt>てん</rt>倒<rt>とう</rt></ruby>しそうになった。この<ruby>事<rt>じ</rt>故<rt>こ</rt></ruby>を<ruby>防<rt>ふせ</rt></ruby>ぐためにどうしたらいいですか。<br><ruby>間<rt>ま</rt>違<rt>ちが</rt></ruby>っているものを<ruby>一<rt>ひと</rt></ruby>つ<ruby>選<rt>えら</rt></ruby>びなさい",
                options: [
                    "<ruby>通<rt>つう</rt>路<rt>ろ</rt></ruby>に物をおいたままにしない。",
                    "<ruby>作<rt>さ</rt>業<rt>ぎょう</rt></ruby><ruby>始<rt>し</rt></ruby><ruby>前<rt>まえ</rt></ruby>には<ruby>通<rt>つう</rt>路<rt>ろ</rt></ruby>の<ruby>安<rt>あん</rt>ぜん<rt>zen</rt></ruby>を<ruby>確<rt>かく</rt>認<rt>にん</rt></ruby>しなくてもいい。",
                    "<ruby>箱<rt>hako</rt></ruby>を重ねてはこぶときは、前が見えるの数の箱をもつ"
                ],
                answer: 1
            },
            {
                question: "ベルトコンベアを止めない<ruby>清<rt>せい</rt>掃<rt>そう</rt></ruby>を行っていたところ、ぞうきんが引っ掛かって手が巻き込まれそうになった。この<ruby>事<rt>じ</rt>故<rt>こ</rt></ruby>の<ruby>原<rt>げん</rt>因<rt>いん</rt></ruby>は何ですか。<ruby>正<rt>ただ</rt></ruby>しいものを<ruby>一<rt>ひと</rt></ruby>つ<ruby>選<rt>えら</rt></ruby>びなさい",
                options: [
                    "<ruby>清<rt>せい</rt>掃<rt>そう</rt></ruby>するときにベルトコンベアを止めなかったため。",
                    "ぞうきんを使って<ruby>清<rt>せい</rt>掃<rt>そう</rt></ruby>したため。",
                    "<ruby>停<rt>てい</rt>止<rt>し</rt></ruby>ボタンを押したため。"
                ],
                answer: 0
            },
            {
                question: "<ruby>安<rt>あん</rt>全<rt>ぜん</rt></ruby><ruby>標<rt>ひょう</rt>識<rt>しき</rt></ruby>について。下記の<ruby>標<rt>ひょう</rt>識<rt>しき</rt></ruby>はどういう意味ですか。<ruby>正<rt>ただ</rt></ruby>しいものを<ruby>一<rt>ひと</rt></ruby>つ<ruby>選<rt>えら</rt></ruby>びなさい。",
                options: [
                    "<ruby>手<rt>て</rt></ruby>で触れることを<ruby>禁<rt>きん</rt>止<rt>し</rt></ruby>する。",
                    "<ruby>扉<rt>とびら</rt></ruby>をあけっぱなしにすることを<ruby>禁<rt>きん</rt>止<rt>し</rt></ruby>する。",
                    "入ることを<ruby>禁<rt>きん</rt>止<rt>し</rt></ruby>する。"
                ],
                answer: 2
            },
            {
                question: "<ruby>安<rt>あん</rt>全<rt>ぜん</rt></ruby><ruby>標<rt>ひょう</rt>識<rt>しき</rt></ruby>について、はさまれる<ruby>危<rt>き</rt>険<rt>けん</rt></ruby>を知らせる<ruby>標<rt>ひょう</rt>識<rt>しき</rt></ruby>はどれですか。<br><ruby>間<rt>ま</rt>違<rt>ちが</rt></ruby>っているものを<ruby>一<rt>ひと</rt></ruby>つ<ruby>選<rt>えら</rt></ruby>びなさい。",
                options: [
                    "<ruby>標<rt>ひょう</rt>識<rt>しき</rt></ruby> A",
                    "<ruby>標<rt>ひょう</rt>識<rt>しき</rt></ruby> B",
                    "<ruby>標<rt>ひょう</rt>識<rt>しき</rt></ruby> C"
                ],
                answer: 0
            },
            {
                question: "<ruby>安<rt>あん</rt>全<rt>ぜん</rt></ruby><ruby>標<rt>ひょう</rt>識<rt>しき</rt></ruby>について、やけどをする<ruby>危<rt>険<rt>kiken</rt></ruby></ruby>を知らせる<ruby>標<rt>ひょう</rt>識<rt>shikishi</rt></ruby>はどれですか。<br><ruby>間<rt>ま</rt>違<rt>ちが</rt></ruby>っているものを<ruby>一<rt>ひと</rt></ruby>つ<ruby>選<rt>えら</rt></ruby>びなさい",
                options: [
                    "<ruby>標<rt>ひょう</rt>識<rt>しき</rt></ruby> A",
                    "<ruby>標<rt>ひょう</rt>識<rt>しき</rt></ruby> B",
                    "<ruby>標<rt>ひょう</rt>識<rt>しき</rt></ruby> C"
                ],
                answer: 1
            }
        ]
    }
};
