import React from 'react';
import './SideArticleCard.css';

const SideArticleCard = ({article, formatDate}) => {
	return (
		<div className="row">
			<div className="col-8">
				<a href="#">
					<div className="article-card">
		    			<h6 className="card-title font-weight-bold">{article.title}</h6>
						<p className="font-italic card-date-author">{article.author} - {formatDate(article.publishedAt)}</p>
					</div>
				</a>
			</div>
			<div className="col-4">
				<img src={article.urlToImage} className="card-img crop-side" alt="article image" />
			</div>
		</div>
	)
}

export default SideArticleCard;