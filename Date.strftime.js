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
				
				var
					// Formats match regexp
					Regexp = /%([a-zA-Z])/g,
					
					// Weeks adapter
					Weeks = {
						zh: [ '星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六' ],
						en: [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ]
					};
									
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

					// Hour
					H: function( date ){
						return Fill_zero( date.getHours() );
					},
					
					// Minute
					m: function( date ){
						return Fill_zero( date.getMinutes() );
					},
					
					// Second
					s: function( date ){
						return Fill_zero( date.getSeconds() );
					},
					
					// Weeks ( zh-CN )
					w: function( date ){
						var i = Number( date.getDay() );
						return Weeks.zh[i];
					},
					
					// Weeks ( en )
					e: function( date ){
						var i = Number( date.getDay() );
						return Weeks.en[i];
					},
										
					// Shorthand one: like [ 2013-05-03 ]
					O: '%Y-%M-%D',
					
					// Shorthand two: like [ 05/03/13 ]
					T: '%M/%D/%y',
					
					// Shorthand three: like [ 2013年05月03日 ]
					C: '%Y年%M月%D日',
					
					// Shorthand four: like [ 2013-05-03 22:34:09 ]
					F: '%Y-%M-%D %H:%m:%s',
					
					// Shorthand five: like [ 2013-05-04 星期六 ]
					W: '%Y-%M-%D %w',
					
					// Shorthand six: like [ 2013-07-17 Wednesday ]
					E: '%Y-%M-%D %e'
														
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
