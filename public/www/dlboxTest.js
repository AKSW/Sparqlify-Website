<link rel="stylesheet" href="css/bootstrap.css" />

<script src="js/angular.js"></script>
<script src="js/dlBoxController.js"></script>

<html ng-app="dlBox">
	<body ng-controller="dlBoxController" ng-init="init()">
		<tabset justified="true">
			<tab heading="dl1">
			{{foo}}
			</tab>
			<tab heading="dl2">
			blubb
			</tab>
		</tabset>
	</body>
</html>
