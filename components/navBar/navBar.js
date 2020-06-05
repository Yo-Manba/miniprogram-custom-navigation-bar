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
			value: "#fff"
		},
		bgColor: {
			type: String,
			value: "#f5f5f5"
		},
		bgImg: {
			type: String,
			value: ""
		},
		position: {
			type: String,
			value: "fixed"
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
