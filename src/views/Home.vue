<script>
export default {
	name: 'Home',
}
</script>

<template>
	<div class="view">
		<div class="view__outer">
			<div class="view__inner">
				<div class="hero-text">
					<h1>http://localhost:8080/</h1>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
.view {
	background: url(../assets/overlay3.jpg) no-repeat center center / cover;
	position: relative;
	&::after {
		display: block;
		content: '';
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		top: 0;
		background-color: rgba(255, 255, 255, 0.253);
	}
}

.view__outer,
.view__inner {
	height: 100%;
	display: flex;
	width: 100%;
	position: relative;
	z-index: 1;
}

.hero-text {
	margin: auto;
	padding-bottom: 15px;
	font-style: normal;
	font-weight: bold;
	color: #eee;
	font-size: 14vmin;
	letter-spacing: 0.03em;
	line-height: 1;
	text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.8);
}
</style>
