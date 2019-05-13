<template>
	<router-link to="/" class="logo">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 67.34 63.48" width="40" height="38" class="logo-symbol"><g><g><circle class="cls-1" cx="46.28" cy="23.59" r="21.06"/><circle class="cls-2" cx="32.75" cy="5.93" r="5.93"/><path class="cls-3" d="M27.24,50.3A12.54,12.54,0,0,0,26,50l-.47-.1a7.94,7.94,0,0,0-5.36.32c-2.35,1-4.86,3.1-4.86,6.27l.36,6.71a.34.34,0,0,0,.6.21L27.46,51.1A.49.49,0,0,0,27.24,50.3Z"/><path class="cls-3" d="M54,16.74,20,46.6a.34.34,0,0,0,.32.58,9.69,9.69,0,0,1,4.83-.24c3.06.77,7.3,2.38,7.34,2.39l10.21,3.9a1.09,1.09,0,0,0,1.44-.71L54.92,17.31A.54.54,0,0,0,54,16.74Z"/><path class="cls-4" d="M15.37,47.33a.53.53,0,0,0,.4-.23h0a21.87,21.87,0,0,1,4.67-5.36L49.64,17.39a.51.51,0,0,0-.52-.87L.66,36a1.1,1.1,0,0,0,0,2l8.41,3.64A18,18,0,0,1,12.93,44h0a6.75,6.75,0,0,1,2,2.76c0,.08.05.17.08.25h0S15.06,47.33,15.37,47.33Z"/></g></g></svg>
		<div class="logo-text">
			<span>daily</span><span>uno</span>
		</div>
	</router-link>
</template>

<style lang="scss">
	.logo {
		display: flex;	
		align-items: center;	

		.logo-symbol {
			.cls-1,
			.cls-2,
			.cls-3 {
				fill: #7a91c9;
			}

			.cls-4{
				fill: #3f5aa7;
			}

			.cls-1{
				opacity: 0.3;
			}

			.cls-2{
				opacity: 0.7;
			}
		}

		.logo-text {
			margin-left: 10px;
		}

		span {
			font-weight: 700;
			font-size: 18px;

			&:first-child {
				color: #7E98CD;
			}

			&:last-child {
				color: #3F5AA7;
			}
		}
	}
</style>