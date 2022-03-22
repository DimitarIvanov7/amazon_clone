/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter as Router } from "react-router-dom";

import SpecificItem from "../SpecificItem";

const item = {
	_id: "6228ceaf757bef643518c7ea",
	Id: "17",
	Data: {
		title:
			'Lenovo Flex 5 Laptop, 14.0" FHD Touch Display, AMD Ryzen 5 5500U, 16GB RAM, 256GB Storage, AMD Radeon Graphics, Windows 11 Home',
		search_alias: {
			title: "Electronics",
			value: "electronics",
		},
		keywords:
			'Lenovo,Flex,5,Laptop,,14.0",FHD,Touch,Display,,AMD,Ryzen,5,5500U,,16GB,RAM,,256GB,Storage,,AMD,Radeon,Graphics,,Windows,11,Home',
		keywords_list: [
			"Lenovo",
			"Flex",
			"Laptop",
			'14.0"',
			"Touch",
			"Display",
			"Ryzen",
			"5500U",
			"16GB",
			"256GB",
			"Storage",
			"Radeon",
			"Graphics",
			"Windows",
			"Home",
		],
		asin: "B09BG96KFJ",
		parent_asin: "B09THXKZ32",
		link:
			"https://www.amazon.com/Lenovo-Processor-Graphics-82HU00JWUS-Graphite/dp/B09BG96KFJ",
		brand: "Lenovo",
		protection_plans: [
			{
				asin: "B07PBZ7BBW",
				title: "4-Year Protection",
				price: {
					symbol: "$",
					value: 113.99,
					currency: "USD",
					raw: "$113.99",
				},
			},
			{
				asin: "B07P83ZWQ5",
				title: "2-Year Protection",
				price: {
					symbol: "$",
					value: 65.99,
					currency: "USD",
					raw: "$65.99",
				},
			},
		],
		add_an_accessory: [
			{
				asin: "B0851ZKL8L",
				title:
					"Microsoft 365 Family | Premium Office Apps | Up to 6 users | 3 Months Free, Plus 12-Month Subscription",
				price: {
					symbol: "$",
					value: 89.99,
					currency: "USD",
					raw: "$89.99",
				},
			},
			{
				asin: "B07Q4QZGFR",
				title:
					"Save $30 at checkout | Adobe Acrobat Pro DC subscription with auto-renewal",
				price: {
					symbol: "$",
					value: 178.88,
					currency: "USD",
					raw: "$178.88",
				},
			},
			{
				asin: "B07BFS3G7P",
				title: "Save 68% on McAfee Total Protection 3 Device",
				price: {
					symbol: "$",
					value: 19.99,
					currency: "USD",
					raw: "$19.99",
				},
			},
			{
				asin: "B09FW199HB",
				title:
					"TurboTax Deluxe 2021 Tax Software, Federal and State Tax Return with Federal E-file [Amazon Exclusive] [PC Download]",
				price: {
					symbol: "$",
					value: 49.9,
					currency: "USD",
					raw: "$49.90",
				},
			},
		],
		sell_on_amazon: true,
		variants: [
			{
				asin: "B09BG96KFJ",
				title: "AMD Ryzen",
				is_current_product: true,
				link: "https://www.amazon.com/dp/B09BG96KFJ?th=1&psc=1",
				dimensions: [
					{
						name: "CPU",
						value: "AMD Ryzen",
					},
				],
				main_image:
					"https://m.media-amazon.com/images/I/71zZiQGzc5L._AC_SL1500_.jpg",
				images: [
					{
						variant: "MAIN",
						link:
							"https://m.media-amazon.com/images/I/71zZiQGzc5L._AC_SL1500_.jpg",
					},
					{
						variant: "PT01",
						link:
							"https://m.media-amazon.com/images/I/818B97p+vcL._AC_SL1500_.jpg",
					},
					{
						variant: "PT02",
						link:
							"https://m.media-amazon.com/images/I/71QjZ06DaFL._AC_SL1500_.jpg",
					},
					{
						variant: "PT03",
						link:
							"https://m.media-amazon.com/images/I/71WcP2tg9BL._AC_SL1500_.jpg",
					},
					{
						variant: "PT04",
						link:
							"https://m.media-amazon.com/images/I/71k58VtLUXL._AC_SL1500_.jpg",
					},
					{
						variant: "PT05",
						link:
							"https://m.media-amazon.com/images/I/71Ji9RvCfXL._AC_SL1500_.jpg",
					},
					{
						variant: "PT06",
						link:
							"https://m.media-amazon.com/images/I/71Skp3WsDUL._AC_SL1500_.jpg",
					},
					{
						variant: "PT07",
						link:
							"https://m.media-amazon.com/images/I/81IUcTEIYbL._AC_SL1500_.jpg",
					},
					{
						variant: "PT08",
						link:
							"https://m.media-amazon.com/images/I/81ZtENkaviL._AC_SL1500_.jpg",
					},
					{
						variant: "PT09",
						link:
							"https://m.media-amazon.com/images/I/718puVDixnL._AC_SL1500_.jpg",
					},
					{
						variant: "PT10",
						link:
							"https://m.media-amazon.com/images/I/71MgsefcZzS._AC_SL1500_.jpg",
					},
					{
						variant: "PT11",
						link:
							"https://m.media-amazon.com/images/I/81EVi6koAVL._AC_SL1500_.jpg",
					},
				],
			},
		],
		variant_asins_flat: "B09BG96KF",
		categories: [
			{
				name: "Electronics",
				link:
					"https://www.amazon.com/electronics-store/b/ref=dp_bc_aui_C_1?ie=UTF8&node=172282",
				category_id: "172282",
			},
			{
				name: "Computers & Accessories",
				link:
					"https://www.amazon.com/computer-pc-hardware-accessories-add-ons/b/ref=dp_bc_aui_C_2?ie=UTF8&node=541966",
				category_id: "541966",
			},
			{
				name: "Computers & Tablets",
				link:
					"https://www.amazon.com/Computers-Tablets/b/ref=dp_bc_aui_C_3?ie=UTF8&node=13896617011",
				category_id: "13896617011",
			},
			{
				name: "Laptops",
				link:
					"https://www.amazon.com/Notebooks-Laptop-Computers/b/ref=dp_bc_aui_C_4?ie=UTF8&node=565108",
				category_id: "565108",
			},
			{
				name: "Traditional Laptops",
				link:
					"https://www.amazon.com/Traditional-Laptop-Computers/b/ref=dp_bc_aui_C_5?ie=UTF8&node=13896615011",
				category_id: "13896615011",
			},
		],
		description:
			'Designed to provide excellent all-around performance, graphics, and productivity in a flexible device, the Lenovo Flex 5 14 14-inch laptop is built to be what you need it to be. Proudly powered by AMD Ryzen™ 5000 Series mobile processors with integrated AMD Radeon™ Graphics, the Flex 5 14 has a 360⁰ hinge and touchscreen display, making it easy to watch, work, and create to your heart\'s content. Reduce the clutter with four-sided narrow bezels for more viewing area on the FHD IPS panel. Plus, with a 12-hour battery* with Quick Charge, this slim and lightweight laptop is your ideal travel companion, whether you\'re working at the coffee shop or flying across the country.\n\nThe Flex 5 14 is a 2-in-1 laptop that\'s made to be used the way you want. Flip the hinge and use the touchscreen in "tablet" mode to take notes, draw, or interact with the computer in intuitive ways. Fold it into the familiar "laptop" mode for everyday computing and productivity tasks. Put your convertible laptop in "tent" mode to share photos, videos, or documents so everyone can see your full HD screen. Or flip it into "stand" mode to watch your favorite streaming movies and shows. This easy-to-use laptop also comes with Windows 11 Home, a backlit keyboard, a webcam privacy shutter, and a fingerprint reader.\n\n* All battery life claims are approximate and based on results using the MobileMark® 2014 battery life benchmark test. Actual battery life will vary and depends on many factors such as product configuration and usage, software use, wireless functionality, power management settings, and screen brightness. The maximum capacity of the battery will decrease with time and use.',
		a_plus_content: {
			has_a_plus_content: true,
			has_brand_story: false,
			third_party: true,
		},
		sub_title: {
			text: "Visit the Lenovo Store",
			link:
				"https://www.amazon.com/stores/LENOVO/page/2C6395BA-C701-4025-9D7E-BAE1BD647EEE?ref_=ast_bln",
		},
		amazons_choice: {
			keywords: "in Traditional Laptop Computers by Lenovo",
		},
		rating: 4.5,
		rating_breakdown: {
			five_star: {
				percentage: 80,
				count: 62,
			},
			four_star: {
				percentage: 8,
				count: 6,
			},
			three_star: {
				percentage: 4,
				count: 3,
			},
			two_star: {
				percentage: 2,
				count: 1,
			},
			one_star: {
				percentage: 6,
				count: 4,
			},
		},
		ratings_total: 78,
		reviews_total: 78,
		main_image: {
			link: "https://m.media-amazon.com/images/I/71zZiQGzc5L.jpg",
		},
		images: [
			{
				link: "https://m.media-amazon.com/images/I/71zZiQGzc5L._AC_SL1500_.jpg",
				variant: "MAIN",
			},
			{
				link: "https://m.media-amazon.com/images/I/818B97p+vcL._AC_SL1500_.jpg",
				variant: "PT01",
			},
			{
				link: "https://m.media-amazon.com/images/I/71QjZ06DaFL._AC_SL1500_.jpg",
				variant: "PT02",
			},
			{
				link: "https://m.media-amazon.com/images/I/71WcP2tg9BL._AC_SL1500_.jpg",
				variant: "PT03",
			},
			{
				link: "https://m.media-amazon.com/images/I/71k58VtLUXL._AC_SL1500_.jpg",
				variant: "PT04",
			},
			{
				link: "https://m.media-amazon.com/images/I/71Ji9RvCfXL._AC_SL1500_.jpg",
				variant: "PT05",
			},
			{
				link: "https://m.media-amazon.com/images/I/71Skp3WsDUL._AC_SL1500_.jpg",
				variant: "PT06",
			},
			{
				link: "https://m.media-amazon.com/images/I/81IUcTEIYbL._AC_SL1500_.jpg",
				variant: "PT07",
			},
			{
				link: "https://m.media-amazon.com/images/I/81ZtENkaviL._AC_SL1500_.jpg",
				variant: "PT08",
			},
			{
				link: "https://m.media-amazon.com/images/I/718puVDixnL._AC_SL1500_.jpg",
				variant: "PT09",
			},
			{
				link: "https://m.media-amazon.com/images/I/71MgsefcZzS._AC_SL1500_.jpg",
				variant: "PT10",
			},
			{
				link: "https://m.media-amazon.com/images/I/81EVi6koAVL._AC_SL1500_.jpg",
				variant: "PT11",
			},
		],
		images_count: 12,
		is_bundle: false,
		feature_bullets: [
			"Powered by an AMD Ryzen 5 5500U mobile processor with Radeon graphics, this portable notebook computer has 16GB DDR4 RAM and 256GB NVMe SSD Storage",
			"Reduce the clutter - The Flex 5 14 touchscreen laptop has a narrow bezel on 4 sides for more viewing area and less clutter on the IPS FHD (1920 x 1080) display",
			"Designed to keep your ideas flowing, anywhere, anytime with the ability to multi-mode, this Windows laptop has a 360⁰ hinge so you can use it in laptop mode for everyday computing, tent mode for sharing, stand mode for binge-watching your favorite streaming shows, or tablet mode for easy interaction",
			"A physical shutter on the webcam improves your privacy, allowing you to keep out unwanted attention",
			"Stay connected with integrated 2x2 WiFi 6 (802.11AX), Bluetooth 5, 2 USB-A ports, 1 USB-C with PD to support power charging, HDMI, a 4-in-1 card reader, and an audio jack",
			"Includes free 3-month trial of Xbox Game Pass Ultimate - Play over 100 high-quality PC games on Windows PC; includes iconic Bethesda games, new day one titles, and the EA Play on PC catalog",
		],
		feature_bullets_count: 6,
		feature_bullets_flat:
			"Includes free 3-month trial of Xbox Game Pass Ultimate - Play over 100 high-quality PC games on Windows PC; includes iconic Bethesda games, new day one titles, and the EA Play on PC catalog. Stay connected with integrated 2x2 WiFi 6 (802.11AX), Bluetooth 5, 2 USB-A ports, 1 USB-C with PD to support power charging, HDMI, a 4-in-1 card reader, and an audio jack. A physical shutter on the webcam improves your privacy, allowing you to keep out unwanted attention. Designed to keep your ideas flowing, anywhere, anytime with the ability to multi-mode, this Windows laptop has a 360⁰ hinge so you can use it in laptop mode for everyday computing, tent mode for sharing, stand mode for binge-watching your favorite streaming shows, or tablet mode for easy interaction. Reduce the clutter - The Flex 5 14 touchscreen laptop has a narrow bezel on 4 sides for more viewing area and less clutter on the IPS FHD (1920 x 1080) display. Powered by an AMD Ryzen 5 5500U mobile processor with Radeon graphics, this portable notebook computer has 16GB DDR4 RAM and 256GB NVMe SSD Storage.",
		attributes: [
			{
				name: "Series",
				value: "Ideapad Flex 5 14 Laptop",
			},
			{
				name: "Brand",
				value: "Lenovo",
			},
			{
				name: "Specific Uses For Product",
				value: "Personal",
			},
			{
				name: "Screen Size",
				value: "14 Inches",
			},
			{
				name: "Operating System",
				value: "Windows 11",
			},
			{
				name: "Human Interface Input",
				value: "Keyboard",
			},
			{
				name: "CPU Manufacturer",
				value: "AMD",
			},
			{
				name: "Card Description",
				value: "Integrated",
			},
			{
				name: "Color",
				value: "Graphite Grey",
			},
			{
				name: "Processor Count",
				value: "1",
			},
		],
		top_reviews: [
			{
				id: "R2FDN0ZKCNDDLZ",
				title: "A powerful and versatile tablet/laptop",
				body:
					"Coming from a traditional laptop, this is an amazing option if you want a truly versatile and convenient computer. I wouldn't expect to play games at the highest settings but for it's price point it makes sense. I didn't think I'd be using the touchscreen as much as I thought. It is super smooth like you'd expect a high end tablet. The keyboard is easy to get used to. I'm used to a full size keyboard but I don't really miss it so that's a great sign. It's really easy to switch between tent mode, tablet mode, or laptop mode. 2 USB ports is kind of limiting. The pen works really well. The plastic piece that attaches to the USB port is really cheap feeling and doesn't hold the pen upright (even though there's a hole on top as if it's supposed to) but it's not a big deal. Out of the box it doesn't seem to be as smooth as the lens like from the Samsung tab S7 plus, but I'm sure it just takes some messing with the settings. The battery life is really good. I'd say it's on par with laptops. You could get by almost the whole day without charging and if you need to, it charges pretty quickly. Overall I'm very happy with this laptop and I'm excited to work on creative projects with it!Read more",
				body_html:
					'<div data-a-expander-name="review_text_read_more" data-a-expander-collapsed-height="300" class="a-expander-collapsed-height a-row a-expander-container a-expander-partial-collapse-container" style="max-height:300px"><div data-hook="review-collapsed" aria-expanded="false" class="a-expander-content reviewText review-text-content a-expander-partial-collapse-content"> <span> Coming from a traditional laptop, this is an amazing option if you want a truly versatile and convenient computer. I wouldn\'t expect to play games at the highest settings but for it\'s price point it makes sense.<br><br>I didn\'t think I\'d be using the touchscreen as much as I thought. It is super smooth like you\'d expect a high end tablet.<br><br>The keyboard is easy to get used to. I\'m used to a full size keyboard but I don\'t really miss it so that\'s a great sign. It\'s really easy to switch between tent mode, tablet mode, or laptop mode. 2 USB ports is kind of limiting.<br><br>The pen works really well. The plastic piece that attaches to the USB port is really cheap feeling and doesn\'t hold the pen upright (even though there\'s a hole on top as if it\'s supposed to) but it\'s not a big deal. Out of the box it doesn\'t seem to be as smooth as the lens like from the Samsung tab S7 plus, but I\'m sure it just takes some messing with the settings.<br><br>The battery life is really good. I\'d say it\'s on par with laptops. You could get by almost the whole day without charging and if you need to, it charges pretty quickly.<br><br>Overall I\'m very happy with this laptop and I\'m excited to work on creative projects with it! </span> </div><div class="a-expander-header a-expander-partial-collapse-header"><div class="a-expander-content-fade"></div><a href="javascript:void(0)" data-csa-c-func-deps="aui-da-a-expander-toggle" data-csa-c-type="widget" data-csa-interaction-events="click" data-hook="expand-collapse-read-more-less" aria-label="Toggle full review text" aria-expanded="false" role="button" data-action="a-expander-toggle" class="a-declarative" data-a-expander-toggle="{&quot;allowLinkDefault&quot;:true, &quot;expand_prompt&quot;:&quot;Read more&quot;, &quot;collapse_prompt&quot;:&quot;Read less&quot;}"><i class="a-icon a-icon-extender-expand"></i><span class="a-expander-prompt">Read more</span></a></div></div>',
				link:
					"https://www.amazon.com/gp/customer-reviews/R2FDN0ZKCNDDLZ/ref=cm_cr_dp_d_rvw_ttl?ie=UTF8&ASIN=B09BG96KFJ",
				rating: 5,
				date: {
					raw: "Reviewed in the United States on December 27, 2021",
					utc: "2021-12-27T00:00:00.000Z",
				},
				profile: {
					name: "Sergio M.",
					link:
						"https://www.amazon.com/gp/profile/amzn1.account.AGEV6IABHYQU2HTQFDIW6CQ4PKDA/ref=cm_cr_dp_d_gw_tr?ie=UTF8",
					id: "AGEV6IABHYQU2HTQFDIW6CQ4PKDA",
				},
				vine_program: false,
				verified_purchase: false,
				helpful_votes: 25,
				review_country: "us",
				is_global_review: false,
			},
			{
				id: "R3DNSUPMLBILDY",
				title: "Issue with BIOS update that cause laptop not to post.",
				body:
					"Be careful with this, DO NOT UPDATE THE BIOS, using Lenovo's Vantage app. It corrupts your bios leaving the laptop unable to boot. Reading through forums this seems to be a recurring issue. Laptop didn't last a day...Read more",
				body_html:
					'<div data-a-expander-name="review_text_read_more" data-a-expander-collapsed-height="300" class="a-expander-collapsed-height a-row a-expander-container a-expander-partial-collapse-container" style="max-height:300px"><div data-hook="review-collapsed" aria-expanded="false" class="a-expander-content reviewText review-text-content a-expander-partial-collapse-content"> <span> Be careful with this, DO NOT UPDATE THE BIOS, using Lenovo\'s Vantage app. It corrupts your bios leaving the laptop unable to boot. Reading through forums this seems to be a recurring issue. Laptop didn\'t last a day... </span> </div><div class="a-expander-header a-expander-partial-collapse-header"><div class="a-expander-content-fade"></div><a href="javascript:void(0)" data-csa-c-func-deps="aui-da-a-expander-toggle" data-csa-c-type="widget" data-csa-interaction-events="click" data-hook="expand-collapse-read-more-less" aria-label="Toggle full review text" aria-expanded="false" role="button" data-action="a-expander-toggle" class="a-declarative" data-a-expander-toggle="{&quot;allowLinkDefault&quot;:true, &quot;expand_prompt&quot;:&quot;Read more&quot;, &quot;collapse_prompt&quot;:&quot;Read less&quot;}"><i class="a-icon a-icon-extender-expand"></i><span class="a-expander-prompt">Read more</span></a></div></div>',
				link:
					"https://www.amazon.com/gp/customer-reviews/R3DNSUPMLBILDY/ref=cm_cr_dp_d_rvw_ttl?ie=UTF8&ASIN=B09BG96KFJ",
				rating: 1,
				date: {
					raw: "Reviewed in the United States on February 15, 2022",
					utc: "2022-02-15T00:00:00.000Z",
				},
				profile: {
					name: "Daniel G. Alexis",
					link:
						"https://www.amazon.com/gp/profile/amzn1.account.AEATF6BRTWDXA6M3L6AWX4HINKOA/ref=cm_cr_dp_d_gw_tr?ie=UTF8",
					id: "AEATF6BRTWDXA6M3L6AWX4HINKOA",
				},
				vine_program: false,
				verified_purchase: false,
				helpful_votes: 21,
				review_country: "us",
				is_global_review: false,
			},
			{
				id: "R10YQL5BNVBMUF",
				title: "6.5/10 - Good for Daily web browsing and  some office work",
				body:
					"Good for daily tasks like web browsing and office work. not for gaming. screen is ok the 1080 resolution is not the best. size is great and keyboard is great. touch screed is a fun extra. not worth more then 600$Read more",
				body_html:
					'<div data-a-expander-name="review_text_read_more" data-a-expander-collapsed-height="300" class="a-expander-collapsed-height a-row a-expander-container a-expander-partial-collapse-container" style="max-height:300px"><div data-hook="review-collapsed" aria-expanded="false" class="a-expander-content reviewText review-text-content a-expander-partial-collapse-content"> <span> Good for daily tasks like web browsing and office work. not for gaming. screen is ok the 1080 resolution is not the best. size is great and keyboard is great. touch screed is a fun extra. not worth more then 600$ </span> </div><div class="a-expander-header a-expander-partial-collapse-header"><div class="a-expander-content-fade"></div><a href="javascript:void(0)" data-csa-c-func-deps="aui-da-a-expander-toggle" data-csa-c-type="widget" data-csa-interaction-events="click" data-hook="expand-collapse-read-more-less" aria-label="Toggle full review text" aria-expanded="false" role="button" data-action="a-expander-toggle" class="a-declarative" data-a-expander-toggle="{&quot;allowLinkDefault&quot;:true, &quot;expand_prompt&quot;:&quot;Read more&quot;, &quot;collapse_prompt&quot;:&quot;Read less&quot;}"><i class="a-icon a-icon-extender-expand"></i><span class="a-expander-prompt">Read more</span></a></div></div>',
				link:
					"https://www.amazon.com/gp/customer-reviews/R10YQL5BNVBMUF/ref=cm_cr_dp_d_rvw_ttl?ie=UTF8&ASIN=B09BG96KFJ",
				rating: 4,
				date: {
					raw: "Reviewed in the United States on January 1, 2022",
					utc: "2022-01-01T00:00:00.000Z",
				},
				profile: {
					name: "yaniv.shams",
					link:
						"https://www.amazon.com/gp/profile/amzn1.account.AFJG72TFRN6OOJU5PM4PLTUOK7IQ/ref=cm_cr_dp_d_gw_tr?ie=UTF8",
					id: "AFJG72TFRN6OOJU5PM4PLTUOK7IQ",
				},
				vine_program: false,
				verified_purchase: false,
				helpful_votes: 13,
				review_country: "us",
				is_global_review: false,
			},
			{
				id: "R3OBWG1XNAXT19",
				title: "Great Laptop",
				body:
					"We bought this laptop as a Christmas gift for my daughter. We were very pleased with the screen quality and touch screen. Also, what you get with this laptop is extraordinary. You can’t beat the price for what you’re getting. I would definitely buy another one. Kind of wish I needed another oneRead more",
				body_html:
					'<div data-a-expander-name="review_text_read_more" data-a-expander-collapsed-height="300" class="a-expander-collapsed-height a-row a-expander-container a-expander-partial-collapse-container" style="max-height:300px"><div data-hook="review-collapsed" aria-expanded="false" class="a-expander-content reviewText review-text-content a-expander-partial-collapse-content"> <span> We bought this laptop as a Christmas gift for my daughter. We were very pleased with the screen quality and touch screen. Also, what you get with this laptop is extraordinary. You can’t beat the price for what you’re getting. I would definitely buy another one. Kind of wish I needed another one </span> </div><div class="a-expander-header a-expander-partial-collapse-header"><div class="a-expander-content-fade"></div><a href="javascript:void(0)" data-csa-c-func-deps="aui-da-a-expander-toggle" data-csa-c-type="widget" data-csa-interaction-events="click" data-hook="expand-collapse-read-more-less" aria-label="Toggle full review text" aria-expanded="false" role="button" data-action="a-expander-toggle" class="a-declarative" data-a-expander-toggle="{&quot;allowLinkDefault&quot;:true, &quot;expand_prompt&quot;:&quot;Read more&quot;, &quot;collapse_prompt&quot;:&quot;Read less&quot;}"><i class="a-icon a-icon-extender-expand"></i><span class="a-expander-prompt">Read more</span></a></div></div>',
				link:
					"https://www.amazon.com/gp/customer-reviews/R3OBWG1XNAXT19/ref=cm_cr_dp_d_rvw_ttl?ie=UTF8&ASIN=B09BG96KFJ",
				rating: 5,
				date: {
					raw: "Reviewed in the United States on December 28, 2021",
					utc: "2021-12-28T00:00:00.000Z",
				},
				profile: {
					name: "liz",
					link:
						"https://www.amazon.com/gp/profile/amzn1.account.AEPSBYOBDJY5OM54YZCAF35PSCIQ/ref=cm_cr_dp_d_gw_tr?ie=UTF8",
					id: "AEPSBYOBDJY5OM54YZCAF35PSCIQ",
				},
				vine_program: false,
				verified_purchase: false,
				helpful_votes: 8,
				review_country: "us",
				is_global_review: false,
			},
			{
				id: "R3IJYKTBLAIA0M",
				title: "I love this computer but....",
				body:
					"I like the actual computer but the Lenovo company is a joke. I ordered one computer directly from the Lenovo company. It took 3 weeks to get here and it was defective. Without going into full detail, I had to contact the company to try and fix the computer. Firstly, good luck getting through to anyone. And if you do succeed in getting through, you will be transferred 100 times, because each person you speak with says that it is not their department. Then, if you are lucky enough to get to the correct department you probably will be disconnected and have to start the process all over again. Additionally, you will most likely not understand a word they are saying. Without going over the full details of the three days it took me to finally speak with someone, their advice was to send the computer back, and they would send me another one, which would be here in about 4 weeks. So, I requested a refund which took 6-8 weeks to fully process. In the meantime I needed a computer immediately so I decided to try again with the same exact computer. This time I bought the computer through Amazon and it was delivered in 48 hours. I subsequently wrote a detailed letter to the Lenovo company and emailed it to every email address that i could find, to document my experience. I did not hear back from anyone. I am sure at least one email got through to someone, somewhere. Anyway, I really like the computer that I got from Amazon. My only complaint, which is probably my fault, is that the computer screen is a bit too small and is hard to see at times.Read more",
				body_html:
					'<div data-a-expander-name="review_text_read_more" data-a-expander-collapsed-height="300" class="a-expander-collapsed-height a-row a-expander-container a-expander-partial-collapse-container" style="max-height:300px"><div data-hook="review-collapsed" aria-expanded="false" class="a-expander-content reviewText review-text-content a-expander-partial-collapse-content"> <span> I like the actual computer but the Lenovo company is a joke. I ordered one computer directly from the Lenovo company. It took 3 weeks to get here and it was defective. Without going into full detail, I had to contact the company to try and fix the computer. Firstly, good luck getting through to anyone. And if you do succeed in getting through, you will be transferred 100 times, because each person you speak with says that it is not their department. Then, if you are lucky enough to get to the correct department you probably will be disconnected and have to start the process all over again. Additionally, you will most likely not understand a word they are saying.<br><br>Without going over the full details of the three days it took me to finally speak with someone, their advice was to send the computer back, and they would send me another one, which would be here in about 4 weeks. So, I requested a refund which took 6-8 weeks to fully process.<br><br>In the meantime I needed a computer immediately so I decided to try again with the same exact computer. This time I bought the computer through Amazon and it was delivered in 48 hours. I subsequently wrote a detailed letter to the Lenovo company and emailed it to every email address that i could find, to document my experience. I did not hear back from anyone. I am sure at least one email got through to someone, somewhere.<br><br>Anyway, I really like the computer that I got from Amazon. My only complaint, which is probably my fault, is that the computer screen is a bit too small and is hard to see at times. </span> </div><div class="a-expander-header a-expander-partial-collapse-header"><div class="a-expander-content-fade"></div><a href="javascript:void(0)" data-csa-c-func-deps="aui-da-a-expander-toggle" data-csa-c-type="widget" data-csa-interaction-events="click" data-hook="expand-collapse-read-more-less" aria-label="Toggle full review text" aria-expanded="false" role="button" data-action="a-expander-toggle" class="a-declarative" data-a-expander-toggle="{&quot;allowLinkDefault&quot;:true, &quot;expand_prompt&quot;:&quot;Read more&quot;, &quot;collapse_prompt&quot;:&quot;Read less&quot;}"><i class="a-icon a-icon-extender-expand"></i><span class="a-expander-prompt">Read more</span></a></div></div>',
				link:
					"https://www.amazon.com/gp/customer-reviews/R3IJYKTBLAIA0M/ref=cm_cr_dp_d_rvw_ttl?ie=UTF8&ASIN=B09BG96KFJ",
				rating: 3,
				date: {
					raw: "Reviewed in the United States on March 2, 2022",
					utc: "2022-03-02T00:00:00.000Z",
				},
				profile: {
					name: "Lauren J.",
					link:
						"https://www.amazon.com/gp/profile/amzn1.account.AEFJISHI2H7ZQERYH754SJF2MAIA/ref=cm_cr_dp_d_gw_tr?ie=UTF8",
					id: "AEFJISHI2H7ZQERYH754SJF2MAIA",
				},
				vine_program: false,
				verified_purchase: false,
				helpful_votes: 2,
				review_country: "us",
				is_global_review: false,
			},
			{
				id: "R3FACUA09H2BK8",
				title: "Keeps crashing during my online teaching job.",
				body:
					"Can't keep strong wifi signal and freezes/crashes while I am trying to do my online jobRead more",
				body_html:
					'<div data-a-expander-name="review_text_read_more" data-a-expander-collapsed-height="300" class="a-expander-collapsed-height a-row a-expander-container a-expander-partial-collapse-container" style="max-height:300px"><div data-hook="review-collapsed" aria-expanded="false" class="a-expander-content reviewText review-text-content a-expander-partial-collapse-content"> <span> Can\'t keep strong wifi signal and freezes/crashes while I am trying to do my online job </span> </div><div class="a-expander-header a-expander-partial-collapse-header"><div class="a-expander-content-fade"></div><a href="javascript:void(0)" data-csa-c-func-deps="aui-da-a-expander-toggle" data-csa-c-type="widget" data-csa-interaction-events="click" data-hook="expand-collapse-read-more-less" aria-label="Toggle full review text" aria-expanded="false" role="button" data-action="a-expander-toggle" class="a-declarative" data-a-expander-toggle="{&quot;allowLinkDefault&quot;:true, &quot;expand_prompt&quot;:&quot;Read more&quot;, &quot;collapse_prompt&quot;:&quot;Read less&quot;}"><i class="a-icon a-icon-extender-expand"></i><span class="a-expander-prompt">Read more</span></a></div></div>',
				link:
					"https://www.amazon.com/gp/customer-reviews/R3FACUA09H2BK8/ref=cm_cr_dp_d_rvw_ttl?ie=UTF8&ASIN=B09BG96KFJ",
				rating: 2,
				date: {
					raw: "Reviewed in the United States on January 28, 2022",
					utc: "2022-01-28T00:00:00.000Z",
				},
				profile: {
					name: "Sondra",
					link:
						"https://www.amazon.com/gp/profile/amzn1.account.AHQCCA4RRUTTJ3TWFF3DGUHMVF3A/ref=cm_cr_dp_d_gw_tr?ie=UTF8",
					id: "AHQCCA4RRUTTJ3TWFF3DGUHMVF3A",
				},
				vine_program: false,
				verified_purchase: false,
				helpful_votes: 6,
				review_country: "us",
				is_global_review: false,
			},
			{
				id: "R25PMX87WZVD5P",
				title: "Great Device!  Only one Complaint...",
				body:
					"Very Nice device with a sleek design but would've been better to have indentations to make opening much easier.Read more",
				body_html:
					'<div data-a-expander-name="review_text_read_more" data-a-expander-collapsed-height="300" class="a-expander-collapsed-height a-row a-expander-container a-expander-partial-collapse-container" style="max-height:300px"><div data-hook="review-collapsed" aria-expanded="false" class="a-expander-content reviewText review-text-content a-expander-partial-collapse-content"> <span> Very Nice device with a sleek design but would\'ve been better to have indentations to make opening much easier. </span> </div><div class="a-expander-header a-expander-partial-collapse-header"><div class="a-expander-content-fade"></div><a href="javascript:void(0)" data-csa-c-func-deps="aui-da-a-expander-toggle" data-csa-c-type="widget" data-csa-interaction-events="click" data-hook="expand-collapse-read-more-less" aria-label="Toggle full review text" aria-expanded="false" role="button" data-action="a-expander-toggle" class="a-declarative" data-a-expander-toggle="{&quot;allowLinkDefault&quot;:true, &quot;expand_prompt&quot;:&quot;Read more&quot;, &quot;collapse_prompt&quot;:&quot;Read less&quot;}"><i class="a-icon a-icon-extender-expand"></i><span class="a-expander-prompt">Read more</span></a></div></div>',
				link:
					"https://www.amazon.com/gp/customer-reviews/R25PMX87WZVD5P/ref=cm_cr_dp_d_rvw_ttl?ie=UTF8&ASIN=B09BG96KFJ",
				rating: 5,
				date: {
					raw: "Reviewed in the United States on February 7, 2022",
					utc: "2022-02-07T00:00:00.000Z",
				},
				profile: {
					name: "Doug C",
					link:
						"https://www.amazon.com/gp/profile/amzn1.account.AEJJK2FZABCGNYZ4LB57RA6RN5CA/ref=cm_cr_dp_d_gw_tr?ie=UTF8",
					id: "AEJJK2FZABCGNYZ4LB57RA6RN5CA",
				},
				vine_program: false,
				verified_purchase: false,
				helpful_votes: 4,
				review_country: "us",
				is_global_review: false,
			},
			{
				id: "R1YJ6IRAHIYL57",
				title: "Nice, powerful laptop for a great price.",
				body:
					"Excellent, very fast laptop for the price. Great looks, good display, powerful processor.Read more",
				body_html:
					'<div data-a-expander-name="review_text_read_more" data-a-expander-collapsed-height="300" class="a-expander-collapsed-height a-row a-expander-container a-expander-partial-collapse-container" style="max-height:300px"><div data-hook="review-collapsed" aria-expanded="false" class="a-expander-content reviewText review-text-content a-expander-partial-collapse-content"> <span> Excellent, very fast laptop for the price. Great looks, good display, powerful processor. </span> </div><div class="a-expander-header a-expander-partial-collapse-header"><div class="a-expander-content-fade"></div><a href="javascript:void(0)" data-csa-c-func-deps="aui-da-a-expander-toggle" data-csa-c-type="widget" data-csa-interaction-events="click" data-hook="expand-collapse-read-more-less" aria-label="Toggle full review text" aria-expanded="false" role="button" data-action="a-expander-toggle" class="a-declarative" data-a-expander-toggle="{&quot;allowLinkDefault&quot;:true, &quot;expand_prompt&quot;:&quot;Read more&quot;, &quot;collapse_prompt&quot;:&quot;Read less&quot;}"><i class="a-icon a-icon-extender-expand"></i><span class="a-expander-prompt">Read more</span></a></div></div>',
				link:
					"https://www.amazon.com/gp/customer-reviews/R1YJ6IRAHIYL57/ref=cm_cr_dp_d_rvw_ttl?ie=UTF8&ASIN=B09BG96KFJ",
				rating: 5,
				date: {
					raw: "Reviewed in the United States on January 26, 2022",
					utc: "2022-01-26T00:00:00.000Z",
				},
				profile: {
					name: "Jeremy DeLong",
					link:
						"https://www.amazon.com/gp/profile/amzn1.account.AGXYNLX7BAO5JJCQN6J276BA7UHQ/ref=cm_cr_dp_d_gw_tr?ie=UTF8",
					id: "AGXYNLX7BAO5JJCQN6J276BA7UHQ",
				},
				vine_program: false,
				verified_purchase: false,
				helpful_votes: 2,
				review_country: "us",
				is_global_review: false,
			},
			{
				id: "R3B8KLR0IV9DC5",
				title: "Excelente",
				body:
					"Me ha gustado bastante esta pc, llevo poco con ella pero se siente de buena calidad. Ofrece bastante para su precio; la pantalla es adecuada, el Ryzen 5500u sirve incluso para jugar a fortnite (modo rendimiento a mas de 60 fps) Obviamente se calienta cuando se somete a altas cargas de trabajo como el gaming, ademas de que las entradas y salidas de aire no son muy optimas. De cualquier modo, recomendaría un teclado externo y mouse para una mejor experiencia al jugar, y audífonos en el modo tableta a que las bocinas quedan del lado opuesto a la pantalla al hacer flip. El hecho de que incluya el lápiz es un plus, aunque creo que podría ser mejor, tiene un accesorio para anclarlo a una entrada usb, pero es un poco estorbo, así que hay que tener cuidado de no perder ese lápiz. Una cosa que no me ha gustado es la disposición del botón de encendido/apagado. Está en el lateral derecho y en ocaciónes lo presiono sin querer al momento de moverla o voltearla a modo tableta; no es nada grave pero estaría mejor integrado junto al teclado, o incluso en el sensor de huella. Otro punto negativo no es realmente del hardware, sino del Windows 11 que viene preinstalado, y es que tiene aun varios bugs gráficos y demás. Imagino que se corregirán con el tiempo. Por ultimo, el especio según que necesites descargar puede ser insuficiente, afortunadamente puede cambiarse por un ssd m.2 de mayor capacidad, pero es algo a considerar. En general estoy contento con ella, me parece una buena compra incluso con el impuesto de importación. Iré actualizando según se necesite.Read more",
				body_html:
					'<div data-a-expander-name="review_text_read_more" data-a-expander-collapsed-height="300" class="a-expander-collapsed-height a-row a-expander-container a-expander-partial-collapse-container" style="max-height:300px"><div data-hook="review-collapsed" aria-expanded="false" class="a-expander-content reviewText review-text-content a-expander-partial-collapse-content"> <span class="cr-original-review-content"> Me ha gustado bastante esta pc, llevo poco con ella pero se siente de buena calidad. Ofrece bastante para su precio; la pantalla es adecuada, el Ryzen 5500u sirve incluso para jugar a fortnite (modo rendimiento a mas de 60 fps)<br>Obviamente se calienta cuando se somete a altas cargas de trabajo como el gaming, ademas de que las entradas y salidas de aire no son muy optimas.<br>De cualquier modo, recomendaría un teclado externo y mouse para una mejor experiencia al jugar, y audífonos en el modo tableta a que las bocinas quedan del lado opuesto a la pantalla al hacer flip.<br><br>El hecho de que incluya el lápiz es un plus, aunque creo que podría ser mejor, tiene un accesorio para anclarlo a una entrada usb, pero es un poco estorbo, así que hay que tener cuidado de no perder ese lápiz.<br><br>Una cosa que no me ha gustado es la disposición del botón de encendido/apagado. Está en el lateral derecho y en ocaciónes lo presiono sin querer al momento de moverla o voltearla a modo tableta; no es nada grave pero estaría mejor integrado junto al teclado, o incluso en el sensor de huella.<br><br>Otro punto negativo no es realmente del hardware, sino del Windows 11 que viene preinstalado, y es que tiene aun varios bugs gráficos y demás. Imagino que se corregirán con el tiempo.<br><br>Por ultimo, el especio según que necesites descargar puede ser insuficiente, afortunadamente puede cambiarse por un ssd m.2 de mayor capacidad, pero es algo a considerar.<br><br>En general estoy contento con ella, me parece una buena compra incluso con el impuesto de importación.<br>Iré actualizando según se necesite. </span><span class="cr-translated-review-content aok-hidden"></span> </div><div class="a-expander-header a-expander-partial-collapse-header"><div class="a-expander-content-fade"></div><a href="javascript:void(0)" data-csa-c-func-deps="aui-da-a-expander-toggle" data-csa-c-type="widget" data-csa-interaction-events="click" data-hook="expand-collapse-read-more-less" aria-label="Toggle full review text" aria-expanded="false" role="button" data-action="a-expander-toggle" class="a-declarative" data-a-expander-toggle="{&quot;allowLinkDefault&quot;:true, &quot;expand_prompt&quot;:&quot;Read more&quot;, &quot;collapse_prompt&quot;:&quot;Read less&quot;}"><i class="a-icon a-icon-extender-expand"></i><span class="a-expander-prompt">Read more</span></a></div></div>',
				rating: 5,
				date: {
					raw: "Reviewed in Mexico on February 28, 2022",
					utc: "2022-02-28T00:00:00.000Z",
				},
				profile: {
					name: "Zention",
					image:
						"https://images-na.ssl-images-amazon.com/images/S/amazon-avatars-global/cf527741-c6e4-482d-9b06-89874f76e6a2._CR62,0,375,375_SX48_.jpg",
				},
				vine_program: false,
				verified_purchase: false,
				helpful_votes: 4,
				review_country: "mx",
				is_global_review: true,
			},
			{
				id: "R2JJDQ6D0LYV0M",
				title: "Excellente Laptop 2 en 1, para arte, CAD y juegos ligeros.",
				body:
					"El Ryzen 5500u es lo suficientemente rapido para correr juegos modernos de 30 a 60fps a 1280x720p en graficos bajos, y por consecuencia corre software profesional como Solidworks, Autocad y Fusion360 sin problemas. Su tamaño es ideal, el stylus funciona de forma perfecta, y la bateria llegar a durar 11 horas de uso ligero, unas 8 viendo videos y unas 3 en programas que requieren potencia. A su vez, el teclado se siente bien y es retroiluminado, y el detector de huellas hace que iniciar sesion sea rapido y facil. Los unicos detalles que no me gustan es que esta algo pesada y la pantalla no llega a ser tan brillante como me gustaria.Read more",
				body_html:
					'<div data-a-expander-name="review_text_read_more" data-a-expander-collapsed-height="300" class="a-expander-collapsed-height a-row a-expander-container a-expander-partial-collapse-container" style="max-height:300px"><div data-hook="review-collapsed" aria-expanded="false" class="a-expander-content reviewText review-text-content a-expander-partial-collapse-content"> <span class="cr-original-review-content"> El Ryzen 5500u es lo suficientemente rapido para correr juegos modernos de 30 a 60fps a 1280x720p en graficos bajos, y por consecuencia corre software profesional como Solidworks, Autocad y Fusion360 sin problemas. Su tamaño es ideal, el stylus funciona de forma perfecta, y la bateria llegar a durar 11 horas de uso ligero, unas 8 viendo videos y unas 3 en programas que requieren potencia. A su vez, el teclado se siente bien y es retroiluminado, y el detector de huellas hace que iniciar sesion sea rapido y facil. Los unicos detalles que no me gustan es que esta algo pesada y la pantalla no llega a ser tan brillante como me gustaria. </span><span class="cr-translated-review-content aok-hidden"></span> </div><div class="a-expander-header a-expander-partial-collapse-header"><div class="a-expander-content-fade"></div><a href="javascript:void(0)" data-csa-c-func-deps="aui-da-a-expander-toggle" data-csa-c-type="widget" data-csa-interaction-events="click" data-hook="expand-collapse-read-more-less" aria-label="Toggle full review text" aria-expanded="false" role="button" data-action="a-expander-toggle" class="a-declarative" data-a-expander-toggle="{&quot;allowLinkDefault&quot;:true, &quot;expand_prompt&quot;:&quot;Read more&quot;, &quot;collapse_prompt&quot;:&quot;Read less&quot;}"><i class="a-icon a-icon-extender-expand"></i><span class="a-expander-prompt">Read more</span></a></div></div>',
				rating: 5,
				date: {
					raw: "Reviewed in Mexico on February 23, 2022",
					utc: "2022-02-23T00:00:00.000Z",
				},
				profile: {
					name: "Amazon Customer",
				},
				vine_program: false,
				verified_purchase: false,
				helpful_votes: 2,
				review_country: "mx",
				is_global_review: true,
			},
			{
				id: "R1A561Z61KF6IA",
				title:
					"Buen producto con las caracteristicas acorde con calidad precio corre bien el sistema",
				body: "Excelente priducto calidad precioRead more",
				body_html:
					'<div data-a-expander-name="review_text_read_more" data-a-expander-collapsed-height="300" class="a-expander-collapsed-height a-row a-expander-container a-expander-partial-collapse-container" style="max-height:300px"><div data-hook="review-collapsed" aria-expanded="false" class="a-expander-content reviewText review-text-content a-expander-partial-collapse-content"> <span class="cr-original-review-content"> Excelente priducto calidad precio </span><span class="cr-translated-review-content aok-hidden"></span> </div><div class="a-expander-header a-expander-partial-collapse-header"><div class="a-expander-content-fade"></div><a href="javascript:void(0)" data-csa-c-func-deps="aui-da-a-expander-toggle" data-csa-c-type="widget" data-csa-interaction-events="click" data-hook="expand-collapse-read-more-less" aria-label="Toggle full review text" aria-expanded="false" role="button" data-action="a-expander-toggle" class="a-declarative" data-a-expander-toggle="{&quot;allowLinkDefault&quot;:true, &quot;expand_prompt&quot;:&quot;Read more&quot;, &quot;collapse_prompt&quot;:&quot;Read less&quot;}"><i class="a-icon a-icon-extender-expand"></i><span class="a-expander-prompt">Read more</span></a></div></div>',
				rating: 5,
				date: {
					raw: "Reviewed in Mexico on January 26, 2022",
					utc: "2022-01-26T00:00:00.000Z",
				},
				profile: {
					name: "Delfino",
				},
				vine_program: false,
				verified_purchase: false,
				review_country: "mx",
				is_global_review: true,
			},
			{
				id: "R3OHBBXJ59SNL1",
				title: "Excelente Laptop 2 en 1",
				body:
					"Funciona muy bien y era lo que esperaba. Trabajar en video llamada y tomar notas es muy fácil y genera un excelente entorno de trabajo. Me hubiera gustado que el stylus se pudiera usar en otros dispositivos touch.Read more",
				body_html:
					'<div data-a-expander-name="review_text_read_more" data-a-expander-collapsed-height="300" class="a-expander-collapsed-height a-row a-expander-container a-expander-partial-collapse-container" style="max-height:300px"><div data-hook="review-collapsed" aria-expanded="false" class="a-expander-content reviewText review-text-content a-expander-partial-collapse-content"> <span class="cr-original-review-content"> Funciona muy bien y era lo que esperaba. Trabajar en video llamada y tomar notas es muy fácil y genera un excelente entorno de trabajo. Me hubiera gustado que el stylus se pudiera usar en otros dispositivos touch. </span><span class="cr-translated-review-content aok-hidden"></span> </div><div class="a-expander-header a-expander-partial-collapse-header"><div class="a-expander-content-fade"></div><a href="javascript:void(0)" data-csa-c-func-deps="aui-da-a-expander-toggle" data-csa-c-type="widget" data-csa-interaction-events="click" data-hook="expand-collapse-read-more-less" aria-label="Toggle full review text" aria-expanded="false" role="button" data-action="a-expander-toggle" class="a-declarative" data-a-expander-toggle="{&quot;allowLinkDefault&quot;:true, &quot;expand_prompt&quot;:&quot;Read more&quot;, &quot;collapse_prompt&quot;:&quot;Read less&quot;}"><i class="a-icon a-icon-extender-expand"></i><span class="a-expander-prompt">Read more</span></a></div></div>',
				rating: 5,
				date: {
					raw: "Reviewed in Mexico on February 18, 2022",
					utc: "2022-02-18T00:00:00.000Z",
				},
				profile: {
					name: "Eric S.",
				},
				vine_program: false,
				verified_purchase: false,
				review_country: "mx",
				is_global_review: true,
			},
			{
				id: "R2UB3OUGF5L3XS",
				title: "No funciono micrófono",
				body:
					"La computadora es increíble, pero no le funciono el micrófono, realmente me urgia.Read more",
				body_html:
					'<div data-a-expander-name="review_text_read_more" data-a-expander-collapsed-height="300" class="a-expander-collapsed-height a-row a-expander-container a-expander-partial-collapse-container" style="max-height:300px"><div data-hook="review-collapsed" aria-expanded="false" class="a-expander-content reviewText review-text-content a-expander-partial-collapse-content"> <span class="cr-original-review-content"> La computadora es increíble, pero no le funciono el micrófono, realmente me urgia. </span><span class="cr-translated-review-content aok-hidden"></span> </div><div class="a-expander-header a-expander-partial-collapse-header"><div class="a-expander-content-fade"></div><a href="javascript:void(0)" data-csa-c-func-deps="aui-da-a-expander-toggle" data-csa-c-type="widget" data-csa-interaction-events="click" data-hook="expand-collapse-read-more-less" aria-label="Toggle full review text" aria-expanded="false" role="button" data-action="a-expander-toggle" class="a-declarative" data-a-expander-toggle="{&quot;allowLinkDefault&quot;:true, &quot;expand_prompt&quot;:&quot;Read more&quot;, &quot;collapse_prompt&quot;:&quot;Read less&quot;}"><i class="a-icon a-icon-extender-expand"></i><span class="a-expander-prompt">Read more</span></a></div></div>',
				rating: 2,
				date: {
					raw: "Reviewed in Mexico on December 30, 2021",
					utc: "2021-12-30T00:00:00.000Z",
				},
				profile: {
					name: "Intelysoft",
				},
				vine_program: false,
				verified_purchase: false,
				review_country: "mx",
				is_global_review: true,
			},
		],
		buybox_winner: {
			deal: {
				with_deal: {
					with_deal_shown: true,
					raw: "With Deal",
				},
			},
			offer_id:
				"961CTfvLY4hMSU/WK7PF4RGpZ6e0LCDO2bApes5qB5JemaQESsyk977Ay87gJKDH+s1LaMmprMrq2TbM3TXiY6xQWDi2ZXyQx2+hyhKF1iy/mt7lroVjfmXxQNRdasADopk4uCpzNV9EkyW172a67Q==",
			new_offers_count: 22,
			new_offers_from: {
				symbol: "$",
				value: 599.99,
				currency: "USD",
				raw: "$599.99",
			},
			is_prime: true,
			is_amazon_fresh: false,
			condition: {
				is_new: true,
			},
			availability: {
				type: "in_stock",
				raw: "In Stock.",
				dispatch_days: 1,
			},
			fulfillment: {
				type: "1p",
				standard_delivery: {
					date: "Friday, March 11",
					name: "FREE",
				},
				fastest_delivery: {
					date: "Wednesday, March 9",
					name:
						"Or fastest delivery Wednesday, March 9. Order within 14 hrs 38 mins",
				},
				is_sold_by_amazon: true,
				is_fulfilled_by_amazon: true,
				is_fulfilled_by_third_party: false,
				is_sold_by_third_party: false,
			},
			price: {
				symbol: "$",
				value: 599.99,
				currency: "USD",
				raw: "$599.99",
			},
			rrp: {
				symbol: "$",
				value: 849.99,
				currency: "USD",
				raw: "$849.99",
			},
			save: {
				symbol: "$",
				value: 250,
				currency: "USD",
				raw: "$250.00",
			},
			shipping: {
				raw: "FREE",
			},
		},
		more_buying_choices: [
			{
				price: {
					symbol: "$",
					value: 619,
					currency: "USD",
					raw: "$619.00",
				},
				seller_name: "ChiefComputers",
				free_shipping: true,
				position: 1,
			},
			{
				price: {
					symbol: "$",
					value: 739.99,
					currency: "USD",
					raw: "$739.99",
				},
				seller_name: "younworldwide",
				free_shipping: true,
				position: 2,
			},
			{
				price: {
					symbol: "$",
					value: 749,
					currency: "USD",
					raw: "$749.00",
				},
				seller_name: "HydroE (S/N Recorded)",
				free_shipping: true,
				position: 3,
			},
		],
		specifications: [
			{
				name: "Standing screen display size",
				value: "14 Inches",
			},
			{
				name: "Max Screen Resolution",
				value: "1920 x 1080",
			},
			{
				name: "Processor",
				value: "2.1 GHz ryzen_5_5500u",
			},
			{
				name: "RAM",
				value: "16 GB DDR4",
			},
			{
				name: "Hard Drive",
				value: "ssd",
			},
			{
				name: "Chipset Brand",
				value: "AMD",
			},
			{
				name: "Card Description",
				value: "Integrated",
			},
			{
				name: "Wireless Type",
				value: "802.11ac",
			},
			{
				name: "Number of USB 3.0 Ports",
				value: "2",
			},
			{
				name: "Average Battery Life (in hours)",
				value: "12 Hours",
			},
			{
				name: "Brand",
				value: "Lenovo",
			},
			{
				name: "Series",
				value: "Ideapad Flex 5 14 Laptop",
			},
			{
				name: "Item model number",
				value: "82HU00JWUS",
			},
			{
				name: "Hardware Platform",
				value: "PC",
			},
			{
				name: "Operating System",
				value: "Windows 11",
			},
			{
				name: "Item Weight",
				value: "5.1 pounds",
			},
			{
				name: "Package Dimensions",
				value: "19 x 11 x 2.5 inches",
			},
			{
				name: "Color",
				value: "Graphite Grey",
			},
			{
				name: "Processor Brand",
				value: "AMD",
			},
			{
				name: "Processor Count",
				value: "1",
			},
			{
				name: "Computer Memory Type",
				value: "DDR4 SDRAM",
			},
			{
				name: "Hard Drive Interface",
				value: "USB",
			},
			{
				name: "Optical Drive Type",
				value: "No Optical Drive",
			},
			{
				name: "Power Source",
				value: "Battery Powered",
			},
			{
				name: "Batteries",
				value: "1 Lithium Polymer batteries required.",
			},
			{
				name: "ASIN",
				value: "B09BG96KFJ",
			},
			{
				name: "Customer Reviews",
				value: "4.5 out of 5 stars 78 ratings 4.5 out of 5 stars",
			},
			{
				name: "Best Sellers Rank",
				value: "#40 in Computers & Accessories",
			},
			{
				name: "Date First Available",
				value: "October 5, 2021",
			},
			{
				name: "Series",
				value: "Ideapad Flex 5 14 Laptop",
			},
			{
				name: "Brand",
				value: "Lenovo",
			},
			{
				name: "Specific Uses For Product",
				value: "Personal",
			},
			{
				name: "Screen Size",
				value: "14 Inches",
			},
			{
				name: "Operating System",
				value: "Windows 11",
			},
			{
				name: "Human Interface Input",
				value: "Keyboard",
			},
			{
				name: "CPU Manufacturer",
				value: "AMD",
			},
			{
				name: "Card Description",
				value: "Integrated",
			},
			{
				name: "Color",
				value: "Graphite Grey",
			},
			{
				name: "Processor Count",
				value: "1",
			},
		],
		specifications_flat:
			"Processor Count: 1. Color: Graphite Grey. Card Description: Integrated. CPU Manufacturer: AMD. Human Interface Input: Keyboard. Operating System: Windows 11. Screen Size: 14 Inches. Specific Uses For Product: Personal. Brand: Lenovo. Series: Ideapad Flex 5 14 Laptop. Date First Available: October 5, 2021. Best Sellers Rank: #40 in Computers & Accessories. Customer Reviews: 4.5 out of 5 stars 78 ratings 4.5 out of 5 stars. ASIN: B09BG96KFJ. Batteries: 1 Lithium Polymer batteries required. Power Source: ‎Battery Powered. Optical Drive Type: ‎No Optical Drive. Hard Drive Interface: ‎USB. Computer Memory Type: ‎DDR4 SDRAM. Processor Count: ‎1. Processor Brand: ‎AMD. Color: ‎Graphite Grey. Package Dimensions: ‎19 x 11 x 2.5 inches. Item Weight: ‎5.1 pounds. Operating System: ‎Windows 11. Hardware Platform: ‎PC. Item model number: ‎82HU00JWUS. Series: ‎Ideapad Flex 5 14 Laptop. Brand: ‎Lenovo. Average Battery Life (in hours): ‎12 Hours. Number of USB 3.0 Ports: ‎2. Wireless Type: ‎802.11ac. Card Description: ‎Integrated. Chipset Brand: ‎AMD. Hard Drive: ‎ssd. RAM: ‎16 GB DDR4. Processor: ‎2.1 GHz ryzen_5_5500u. Max Screen Resolution: ‎1920 x 1080. Standing screen display size: ‎14 Inches.",
		bestsellers_rank: [
			{
				category: "Computers & Accessories",
				rank: 40,
				link: "https://www.amazon.com/gp/bestsellers/pc/ref=pd_zg_ts_pc",
			},
			{
				category: "Traditional Laptop Computers",
				rank: 3,
				link:
					"https://www.amazon.com/gp/bestsellers/pc/13896615011/ref=pd_zg_hrsr_pc",
			},
		],
		platform: "PC",
		color: "Graphite Grey",
		weight: "5.1 pounds",
		first_available: {
			raw: "October 5, 2021",
			utc: "2021-10-05T00:00:00.000Z",
		},
		model_number: "82HU00JWUS",
		bestsellers_rank_flat:
			"Category: Computers & Accessories | Rank: 40, Category: Traditional Laptop Computers | Rank: 3",
	},
	Price: 599.99,
	Quantity: 30,
	createdAt: "2022-03-09T15:58:39.550Z",
	updatedAt: "2022-03-09T15:58:39.550Z",
	__v: 0,
};

test("should render item", () => {
	render(
		<Router>
			<SpecificItem item={item} />
		</Router>
	);
	const quantity = screen.getByRole("img");
	expect(quantity).toBeInTheDocument();
});
