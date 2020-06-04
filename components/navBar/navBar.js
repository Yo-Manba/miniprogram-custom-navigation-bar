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
			type: [Boolean, String],
			default: false
		},
		bgColor: {
			type: [String],
			default: "#fff"
		},
		bgImg: {
			type: [String],
			default: "linear-gradient(135deg, #8bc6ec 0%, #9599e2 100%)"
		},
		position: {
			type: [String],
			default: "fixed"
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
