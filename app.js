//app.js
App({
    onLaunch: function() {
		wx.getSystemInfo({
			success: res => {
				this.globalData.StatusBarH = res.statusBarHeight;
				let menuButtonPos = wx.getMenuButtonBoundingClientRect();
				if (menuButtonPos) {
					this.globalData.MenuButtonPos = menuButtonPos;
					this.globalData.NavBarH = menuButtonPos.top - res.statusBarHeight + menuButtonPos.bottom;
				} else {
					this.globalData.NavBarH = res.statusBarHeight + 50;
				}
			}
		})
    },
    globalData: {
        
    }
})