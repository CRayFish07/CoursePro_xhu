(function(M, $, win) {

	var padding = ($(win).height() - $('#main').height()) / 8;

	$('.mui-table-view.mui-grid-view .mui-table-view-cell').css({
		paddingTop: padding,
		paddingBottom: padding
	});

	M.init({
		preloadPages: [{
			id: 'parent',
			url: 'parent.html'
		}]
	});

	M.plusReady(function() {

		var parentPage = null;

		M('#main').on('tap', 'li', function(e) {
			var self = this,
				title = $(this).find('div').text();

			if (!parentPage) {
				parentPage = plus.webview.getWebviewById('parent');
			}

			M.fire(parentPage, 'getTitle', {
				title: title,
				id: self.id
			});

			M.openWindow({
				id: 'parent',
				styles: {
					top: 0,
					bottom: 0
				},
				waiting: {
					autoShow: false
				}
			});
		});

	});

}(mui, Zepto, window));