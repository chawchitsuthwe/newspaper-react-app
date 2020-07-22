import React from 'react';
import './ArticleCard.css';

const ArticleCard = ({article, category, formatDate}) => {
	return (
		<div>
			<a href="#">
				<div className="card">
	  				<img src={article.urlToImage} className="card-img-top crop" alt="article image" />
	  				<span className="category-tag" style={{position:"absolute"}}>{category}</span>
	  				<div className="card-body">
	    				<h6 className="card-title font-weight-bold">{article.title}</h6>
						<p className="font-italic card-date-author">{article.author} - {formatDate(article.publishedAt)}</p>
	  				</div>
				</div>
			</a>
		</div>
	)
}

export default ArticleCard