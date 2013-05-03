/*!
 * Date.strftime
 * Https://github.com/Graybobo/Date.strftime
 * KILLHAPPY. 2013-05-03
 */

if( typeof module != 'undefined' && module.exports ){
	
	module.exports = (function( DATE ){
		
		'use strict';
		
		if( typeof DATE.prototype.strftime == 'undefined' ){
			
			DATE.prototype.strftime = (function(){
				
				var Regexp = /%([a-zA-Z])/g;
									
				// Date Formats
				DATE.Formats = {
				
					// Year [ like 2013 ]
					Y: function( date ){
						return date.getFullYear();
					},
					// Short written ( Year )
					y: function( date ){
						return Fill_zero( date.getYear() % 100 );
					},
					
					// Month
					M: function( date ){
						return Fill_zero( date.getMonth() + 1 );
					},
					
					// Day
					D: function( date ){
						return Fill_zero( date.getDate() );
					},
										
					// Shorthand one [ like 2013-05-03 ]
					O: '%Y-%M-%D',
					
					// Shorthand two [ like 05/03/13 ]
					T: '%M/%D/%y',
					
					// Shorthand three [ like 2013年05月03日 ]
					C: '%Y年%M月%D日',
														
				};
					
				function Fill_zero( n ){
					return ( 10 > n ) ? ( '0' + n ) : ( '' + n );
				}
				
				function strftime( format ){
					var date = this;
				
					return ( '' + format ).replace( Regexp, function( m, s ){
						var FORMAT = DATE.Formats && DATE.Formats[s];
						if( typeof FORMAT === 'function' ){
							return FORMAT.call( DATE.Formats, date );
						}
						else if( typeof FORMAT === 'string' ){
							return date.strftime( FORMAT );
						}
						return s;
					});
				}

				return strftime;
				
			})();
			
		}
		
	})( Date );
	
}
