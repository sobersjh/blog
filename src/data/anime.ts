// 本地番剧数据配置
export interface AnimeItem {
	title: string;
	status: "watching" | "completed" | "planned";
	rating: number;
	cover: string;
	description: string;
	episodes: string;
	year: string;
	genre: string[];
	studio: string;
	link: string;
	progress: number;
	totalEpisodes: number;
	startDate: string;
	endDate: string;
}

const localAnimeList: AnimeItem[] = [
	{
		title: "某科学的超电磁炮",
		status: "completed",
		rating: 9.7,
		cover: "http://i0.hdslb.com/bfs/bangumi/image/aad797f1f0212aba5578a1ed1c992ef1b9ff7c4b.jpg",
		description: "御坂美琴与学园都市的超能力战斗",
		episodes: "24话",
		year: "2009",
		genre: ["动作", "科幻", "校园"],
		studio: "J.C.Staff",
		link: "https://www.bilibili.com/bangumi/media/md425",
		progress: 24,
		totalEpisodes: 24,
		startDate: "2009-10",
		endDate: "2010-03",
	},
	{
		title: "凡人修仙传",
		status: "completed",
		rating: 9.7,
		cover: "https://i0.hdslb.com/bfs/bangumi/image/0af10a0c3258186e96fde4406b384c13dd643d8f.png",
		description: "平凡少年韩立踏上修仙之路的传奇故事",
		episodes: "持续更新",
		year: "2020",
		genre: ["仙侠", "动作", "冒险"],
		studio: "B.CMAY Pictures",
		link: "https://www.bilibili.com/bangumi/media/md28223043",
		progress: 100,
		totalEpisodes: 100,
		startDate: "2020-07",
		endDate: "2024-12",
	},
	{
		title: "镇魂街",
		status: "completed",
		rating: 9.0,
		cover: "https://i0.hdslb.com/bfs/bangumi/image/fdebaf94f010f6a5ecb1ac80bcd0b2cca9f258a6.png",
		description: "人类共生武魂者守卫镇魂街的热血故事",
		episodes: "40话",
		year: "2023",
		genre: ["动作", "奇幻", "热血"],
		studio: "腾讯动漫",
		link: "https://www.bilibili.com/bangumi/media/md281812061",
		progress: 40,
		totalEpisodes: 40,
		startDate: "2023-04",
		endDate: "2023-12",
	},
	{
		title: "灵笼",
		status: "completed",
		rating: 9.8,
		cover: "https://i0.hdslb.com/bfs/bangumi/image/08bf0c1e24e454de51b58d1e26c0a9aecbe9b0c1.png",
		description: "末日世界中人类与灵笼的生存抗争",
		episodes: "16话",
		year: "2019",
		genre: ["科幻", "动作", "末日"],
		studio: "LAN Studio",
		link: "https://www.bilibili.com/bangumi/media/md21123554",
		progress: 16,
		totalEpisodes: 16,
		startDate: "2019-09",
		endDate: "2023-06",
	},
];

export default localAnimeList;
