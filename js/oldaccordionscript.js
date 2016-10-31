(function( $j ) {
$(document).ready(
		
   function toggletest() { 

   	    //jQuery toggle textarea for the COMMENTS
		//Hide (Collapse) the toggle containers on load
		$j(".switchgroup0").show();
		$j(".switchgroup1").hide(); 
		$j(".switchgroup2").hide(); 
		$j(".switchgroup3").hide();
		
		var myExpandElement = window.location.hash ;   
			//alert("myExpandElement = " + myExpandElement);
		
		$j(myExpandElement).toggleClass("active").next().show("fast"); 
			 
		if(document.location.hash)
		{
   			 window.location = document.location.hash
		}	
		//var shiftWindow = setTimeout(function(){ window.scrollBy(0, -200); }, 1);
//if (location.hash) shiftWindow();
//window.addEventListener("hashchange", shiftWindow);
		 
		$j('.handcursor').click(
			function () { 
				 $j(this).toggleClass("active").next().toggle();
				return false; //Prevent the browser jump to the link anchor
			}
		);
		
		
		//In page anchor link - jumps to the section and opens it. 
		//Note: <a> tags in HTML must have a class = "inpageanchor"
		  $j('.inpageanchor').click(
		  	function(){
				var status_id = this.hash;
			//alert(status_id); 
			$j(status_id).toggleClass("active").next().show("fast");
     		//  return false;
		
		 });
		
		
		
		$j('.subnav a#contract_all').click(
			function () { 
				$j(".switchgroup0").hide(); 
				$j(".switchgroup1").hide();
				$j(".handcursor").toggleClass().toggleClass("handcursor");
				return false; //Prevent the browser jump to the link anchor
			}
		);
		
		$j('.subnav a#expand_all').click(
			function () { 
				$j(".switchgroup0").show(); 
				$j(".switchgroup1").show();
				$j(".handcursor").toggleClass().toggleClass("handcursor active");
				return false; //Prevent the browser jump to the link anchor
			}
		);
		
		$j('.subnav a#contract_all2').click(
			function () { 
				$j(".switchgroup2").hide(); 
				$j(".handcursor").toggleClass().toggleClass("handcursor");
				return false; //Prevent the browser jump to the link anchor
			}
		);
		
		$j('.subnav a#expand_all2').click(
			function () { 
				$j(".switchgroup2").show(); 
				$j(".handcursor").toggleClass().toggleClass("handcursor active");
				return false; //Prevent the browser jump to the link anchor
			}
			
		);
		
		$j('.subnav a#contract_all3').click(
			function () { 
				$j(".switchgroup3").hide(); 
				$j(".handcursor").toggleClass().toggleClass("handcursor");
				return false; //Prevent the browser jump to the link anchor
			}
		);
		
		$j('.subnav a#expand_all3').click(
			function () { 
				$j(".switchgroup3").show(); 
				$j(".handcursor").toggleClass().toggleClass("handcursor active");
				return false; //Prevent the browser jump to the link anchor
			}
			
		);



});//end of ready




})(jQuery);
