// File khusus menampung daftar sesi dan ribuan soal ujian SSW
const sessionsData = {
    "sesi1": {
        title: "Sesi 1: Bahan Kimia & Keamanan Produk (化学物質と安全性)",
        questions: [
            {
                question: "安全ではない食品を作って、それが売られてしまうとどうなりますか。正しいものを一つ選びなさい",
                options: [
                    "食品を食べた人が病気になって、作った会社の信用が落ちる.",
                    "食品を作った会社が有名になって、その会社の別の商品が売れる.",
                    "食品を作った人が病気になって、給料が下がる."
                ],
                answer: 0
            },
            {
                question: "化学物質を正しく管理しないと、どのような危険がありますか。",
                options: [
                    "商品がもっと美味しくなる",
                    "事故や健康被害の原因になる",
                    "仕事が早く終わる"
                ],
                answer: 1
            }
            // Silakan tambah hingga 40 soal di sesi ini!
        ]
    },
    "sesi2": {
        title: "Sesi 2: Kebersihan & Sanitasi Kerja (衛生管理)",
        questions: [
            {
                question: "作業を始める前に、必ずしなければならないことは何ですか。",
                options: [
                    "手洗いと消毒をする",
                    "すぐに機械のスイッチを入れる",
                    "お弁当を食べる"
                ],
                answer: 0
            },
            {
                question: "学校へ行きますか。",
                options: [
                    "はい、行きます。",
                    "いいえ、行きません。",
                    "わかりません。"
                ],
                answer: 0
            }
            // Silakan tambah hingga 40 soal di sesi ini!
        ]
    }
};
