//app.js
App({
    onLaunch: function() {
		wx.getSystemInfo({
			success: res => {
				console.log(res)
				this.globalData.StatusBarH = res.statusBarHeight;
				let menuButtonPos = wx.getMenuButtonBoundingClientRect();
				console.log(menuButtonPos)
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