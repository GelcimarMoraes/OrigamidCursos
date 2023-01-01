<?php $contato = get_page_by_title('contato'); ?>

		<style type="text/css">
			.quebra {
				background: url("<?php the_field('background_footer', $contato); ?>") no-repeat center;
				background-size: cover;
			}
		</style>	

		<div class="quebra">
			<blockquote class="quote-externo container">
				<?php the_field('frase_footer', $contato); ?>
				<cite><?php the_field('autor_footer', $contato); ?></cite>
			</blockquote>
		</div>

		<footer>
			<div class="footer">
				<div class="container">

					<div class="grid-8 footer_historia">
						<h3>Nossa História</h3>
						<?php the_field('resumo_historia', $contato); ?>
					</div>

					<div class="grid-4 footer_contato">
						<h3>Contato</h3>
						<ul>
							<li>- <?php the_field('telefone', $contato); ?></li>
							<li>- <?php the_field('email', $contato); ?></li>
							<li>- <?php the_field('endereco1', $contato); ?></li>
						</ul>
					</div>

					<div class="grid-4 footer_redes">
						<h3>Redes Sociais</h3>
						<?php include(TEMPLATEPATH . "/inc/redes-sociais.php"); ?>
					</div>

				</div>
			</div>

			<div class="copy">
				<div class="container">
					<p class="grid-16"><?php bloginfo('name'); ?> <?php echo date('Y'); ?> - Alguns direitos reservados.</p>
				</div>
			</div>
		</footer>

	<script>
	  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

	  ga('create', 'UA-60088262-1', 'auto');
	  ga('send', 'pageview');

	</script>

	<!-- Inicio Wordpress Footer -->
	<?php wp_footer(); ?>
	<!-- Final Wordpress Footer -->

	</body>
</html>