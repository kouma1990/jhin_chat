angular.module('myApp', [])
	.controller('MyController', ['$scope', function($scope) {
		$scope.result = "";
		$scope.chat = [];
		$scope.chat_num = 0;
		$scope.list = ["殺戮の中で私は咲き誇る。夜明けの花のように",
					   "舞台は、整った！",
					   "時は……満ちた！",
					   "この私が演出するには、何とも悪趣味な舞台だな",
					   "陳腐な脚本などいらぬ。私の手で完璧に仕上げよう",
					   "さあ、死のオペラの開幕だ！",
					   "さあ、開幕の時だ！",
					   "詩の一部となれ！",
					   "美しくあれ！",
					   "観客に、最後の挨拶を！",
					   "私の舞台に相応しくない",
					   "インスピレーションを感じる……",
					   "芸術には、苦しむだけの価値がある",
					   "名声を手に入れたくないか？",
					   "私のために演ずるのだ！",
					   "陳腐な舞台だ",
					   "素晴らしい！",
					   "常に微笑みを忘れず",
					   "配置に着け！",
					   "上出来だ！",
					   "超絶！",
					   "卓越！",
					   "神懸かり！",
					   "魅力的だ！",
					   "愛おしい！",
					   "凡庸なる対称性……",
					   "生涯最高の作品！",
					   "客席に、歓喜の涙を！",
					   "見た者の心に触れよう",
					   "死ぬまで舞い続けるがいい！",
					   "踊ろうではないか！",
					   "私のために歌うのだ！",
					   "リハーサル済みだ！",
					   "平穏な死など、舞台には無価値！",
					   "私のために踊るのだ！",
					   "実に見事だ……",
					   "結末こそが重要なのだ",
					   "観客が待っている",
					   "曲の完成を待たねばならぬ",
					   "奴らは人形。私がその糸を操り、踊らせるのだ",
					   "人は私を狂人と呼ぶ。芸術家とはそういうものだ",
					   "素晴らしいでは駄目だ、完璧でなくては",
					   "この醜さには我慢がならぬ！",
					   "全ての要素が正しい位置になくてはならぬ",
					   "私が邪悪だと？　美もわからぬ愚か者どもめ",
					   "こんな状態ではよい作品など書けぬ",
					   "舞台で自らの全てを出し切る",
					   "私は純粋なのだ。我が作品も同じこと",
					   "我が舞台こそ、我が心",
					   "芸術とは、恐ろしいものであるべきだ",
					   "どんな詩人の言葉も、我が作品の前では無意味",
					   "簡単に死んではならぬ。死はオペラなのだから",
					   "この殺戮を振り付けるとしよう",
					   "殺戮の何と甘美なことか",
					   "この世は残酷。なぜ斯様にも醜い",
					   "皆仮面を被っている。私は自ら創ることを選んだだけだ",
					   "この衝動こそが芸術。抗うことなど出来ぬ",
					   "完璧だけでは足りぬ",
					   "全ての仮面の奥には、また仮面がある",
					   "これこそ、私に与えられし全て",
					   "私は誰も殺めはしない。筋書きに死があるだけだ",
					   "幕が下りるまで、演じ続けるしかないのだ",
					   "私は歌えぬ歌い手、踊れぬ踊り手",
					   "観客にのみ、私の素顔を見せよう",
					   "いつもこれが最後だと言っておきながら、再び舞台に立ってしまうのだ",
					   "私は情熱の奴隷なのだ",
					   "私の作品が問いかける。しかしそこに答えはないのだ",
					   "どちらが偽りなのだ？　仮面か？素顔か？",
					   "主役に言葉などいらぬ",
					   "観客は私を見て何を思うのか……",
					   "暴力的な作品に心惹かれるのだ",
					   "血にも他の色があれば、さぞや美しいだろうに",
					   "舞台の幕を開けよう",
					   "歓声と悲鳴、共に聴かせよう",
					   "作品作りの邪魔はしないでもらおうか",
					   "依頼主は、最高の脚本を求める",
					   "私を批評する者は、何故か皆早死にする",
					   "見る眼のある依頼主には、喜んで脚本を書く",
					   "結末は死と決まっているのだ。せめて、美しく殺めてやろう",
					   "依頼主と私の獲物にカタルシスを",
					   "舞台が開く前は常に緊張する。だが……それがいい。"];

		


		$scope.onClickTalk = function() {
			//$timeout(function() {
			//var update = function () {
			var select_num = Math.floor( Math.random() * $scope.list.length ) ;
			var result = $scope.list[select_num];
			$scope.chat.push({ you:$scope.input_string, jhin:result});
			$scope.input_string="";
			//var scrollHeight = document.getElementById("chat-area").scrollHeight;
			//document.getElementById("chat-area").scrollTop = scrollHeight;

			
		}


		/*
		$scope.$watch("chat_num", function() {
			console.log("a");
			var scrollHeight = document.getElementById("chat-area").scrollHeight;
			document.getElementById("chat-area").scrollTop = scrollHeight;

		});
	*/
		$scope.onClickUranai = function() {
			var select_num = Math.floor( Math.random() * result_list.length ) ;
			$scope.result = result_list[select_num];
		};
	}])
	.directive("ngScrollable", function () {
		return {
	    	restrict: "A",
	    	link: function (scope, elements, attr) {
	    		var element = elements[0];
		    	
		    	scope.$watch(function () { return element.scrollHeight }, function () {
	    			var scrollHeight = document.getElementById("chat-area").scrollHeight;
					document.getElementById("chat-area").scrollTop = scrollHeight;
	     		});
	    	}	
		}
	});
		