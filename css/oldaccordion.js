


//Old Accordion
//-------------------------------------------------------------
.MG-m-Accordion {
	margin-left: 0;
	& > li, .handcursor {
		display: block;
		padding: 0 0 1rem 30px;
		position: relative;
		&:after {
			background: @paleblue;
			background-size: contain;
			content: '+';
			display: block;
			height: 1em;
			left: 0;
			line-height: 1em;
			position: absolute;
			text-align: center;
			top: .8em;
			width: 20px;
			.Transform(translate(0,-50%));
		}
		&.MG-m-Active:after {
			content: '\2013';
		}
		& > div {
			display: none;
			padding: 1rem 0 0;
		}
		& > * {
			cursor: pointer;
			margin: 0;
		}
	}
}