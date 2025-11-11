export const discussionData = [
  {
    id: 1,
    author: "Siswa anonim",
    timestamp: "2 hari lalu",
    title: "Pengalaman Pertama Ikut Konseling",
    content: "Baru pertama kali coba sesi konseling minggu lalu. Awalnya deg-degan banget, tapi ternyata cukup membantu. Ada yang mau share pengalamannya juga?",
    replies: 20,
    category: "konseling"
  },
  {
    id: 2,
    author: "Siswa anonim",
    timestamp: "8 hari lalu",
    title: "Cara Menghadapi Overthinking Sebelum Tidur",
    content: "Setiap malam pikiran terasa penuh, susah tidur karena mikirin hal-hal kecil. Apa ada tips atau rutinitas malam yang membantu kalian lebih tenang?",
    replies: 3,
    category: "mental-health"
  }
];

export const repliesData = {
  2: [
    {
      id: 3,
      author: "Siswa anonim",
      timestamp: "8 hari lalu",
      content: "You're not alone. Overthinking emang melelahkan, apalagi pas mau tidur. Kadang aku cuma butuh ngingetin diri sendiri bahwa nggak semua hal harus diselesaikan malam ini.",
      replies: 1,
      nestedReplies: [
        {
          id: 31,
          author: "Nadia Putri",
          timestamp: "7 hari lalu",
          content: "Betul banget! Kadang kita terlalu keras sama diri sendiri. Self-compassion itu penting.",
          replyTo: 3
        }
      ]
    },
    {
      id: 2,
      author: "Siswa anonim",
      timestamp: "Baru saja",
      content: "Aku sampai sekarang juga masih struggling. Tapi aku belajar untuk nggak terlalu keras sama diri sendiri. Mandi air hangat dan matiin HP 1 jam sebelum tidur cukup ngebantu aku lebih tenang.",
      replies: 0,
      nestedReplies: []
    }
  ]
};