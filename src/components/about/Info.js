import InnerTitle from '../common/InnerTitle';
import React from 'react';

const Info = () => {
	return (
				<div className="infoContainer top nTop clearfix">
					<div className="divider"><span><i className="icon-star-filled" /></span></div>
					<InnerTitle titulo="Contact" subtitulo="Get in touch with me" />

					<div className="infoHolder top">

						<div className="address">
							<i className="icon-location" />
							<p>
								{'Address'}
							</p>
						</div>

						<div className="info">
							<ul>
								<li>
									<div className="ico"><i className="icon-mail" /></div>
									<p style={{'white-space': 'nowrap'}}>{'Email : thesuperjez@gmail.com'}
									</p>
								</li>
								<li>
									<div className="ico"><i className="icon-twitter" /></div>
									<p>{'Twitter : @thesuperjez'}</p>
								</li>
								<li>
									<div className="ico"><i className="icon-phone" /></div>
									<p>{'Skype : thesuperjez'}</p>
								</li>
								<li>
									<div className="ico"><i className="icon-link" /></div>
									<p>{'WebSite : '}<a href="#">{'thejez.net'}</a></p>
								</li>
							</ul>
						</div>


					</div>
				</div>
	);
};

export default Info;
