// components/drawer/drawer.js

const app = getApp();

Component({
	/**
	 * 组件的属性列表
	 */
	properties: {
		hasBack: {
			type: Boolean,
			value: true
		}
	},

	/**
	 * 组件的初始数据
	 */
	data: {
		NavBarH: app.globalData.NavBarH,
	},

	/**
	 * 组件的方法列表
	 */
	methods: {
		showDrawer(e) {
			this.setData({
				showDrawer: true,
				showMask: true
			})
		},

		closeDrawer() {
			this.setData({
				showDrawer: false,
				showMask: false
			})
		},
	}
})
