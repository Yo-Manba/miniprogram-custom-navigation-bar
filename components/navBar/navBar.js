// components/NavBar/navBar.js

const app = getApp();

Component({
	/**
     * 组件的一些选项
     */
	options: {
		multipleSlots: true
	},

	/**
	 * 组件的属性列表
	 */
	properties: {
		hasBack: {
			type: Boolean,
			value: false
		},
		title: {
			type: String,
			value: "标题"
		},
		color: {
			type: String,
			value: "#373737"
		},
		bgColor: {
			type: String,
			value: "#fff"
		},
		bgImg: {
			type: String,
			value: ""
		}
	},

	/**
	 * 组件的初始数据
	 */
	data: {
		StatusBarH: app.globalData.StatusBarH,
		NavBarH: app.globalData.NavBarH,
		MenuButtonPos: app.globalData.MenuButtonPos,
	},

	/**
	 * 组件的方法列表
	 */
	methods: {
		goBack() {
			wx.navigateBack({
				delta: 1
			});
		}
	}
})
