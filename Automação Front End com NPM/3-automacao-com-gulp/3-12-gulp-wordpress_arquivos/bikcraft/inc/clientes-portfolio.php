<?php $portfolio = get_page_by_title('portfolio'); ?>

<ul class="portfolio_lista rslides_portfolio">

	<?php if(have_rows('item_portfolio', $portfolio)): while(have_rows('item_portfolio', $portfolio)) : the_row(); ?>
	<li>
		<div class="grid-8"><img src="<?php the_sub_field('portfolio_imagem1', $portfolio); ?>" alt="<?php the_sub_field('portfolio_imagem_descricao1', $portfolio); ?>"></div>
		<div class="grid-8"><img src="<?php the_sub_field('portfolio_imagem2', $portfolio); ?>" alt="<?php the_sub_field('portfolio_imagem_descricao2', $portfolio); ?>"></div>
		<div class="grid-16"><img src="<?php the_sub_field('portfolio_imagem3', $portfolio); ?>" alt="<?php the_sub_field('portfolio_imagem_descricao3', $portfolio); ?>"></div>
	</li>
	<?php endwhile; else : endif; ?>

</ul>

<?php if (!is_page('portfolio')) { ?>
<div class="call">
	<p><?php the_field('chamada_portfolio', $portfolio); ?></p>
	<a href="/bikcraft/portfolio/" class="btn">Portfólio</a>
</div>
<?php } ?>