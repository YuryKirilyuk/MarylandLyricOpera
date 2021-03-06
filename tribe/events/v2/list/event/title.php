<?php
/**
 * View: List View - Single Event Title
 *
 * Override this template in your own theme by creating a file at:
 * [your-theme]/tribe/events/v2/list/event/title.php
 *
 * See more documentation about our views templating system.
 *
 * @link {INSERT_ARTCILE_LINK_HERE}
 *
 * @version 5.0.0
 *
 * @var WP_Post $event The event post object with properties added by the `tribe_get_event` function.
 *
 * @see tribe_get_event() For the format of the event object.
 */

$event_author = get_field( "event_author" );
$event_conductor = get_field( "event_conductor" );
$event_director = get_field( "event_director" );
$actors = get_field( "actors" );

?>
<div><em><?php echo $event_author; ?></em> </div>
<h3 class="tribe-events-calendar-list__event-title tribe-common-h6 tribe-common-h4--min-medium">
	<a
		href="<?php echo esc_url( $event->permalink ); ?>"
		title="<?php echo esc_attr( $event->title ); ?>"
		rel="bookmark"
		class="tribe-events-calendar-list__event-title-link tribe-common-anchor-thin"
	>
		<?php
		// phpcs:ignore
		echo $event->title;
		?>
		
	</a>	
	
</h3>

<div><b>CONDUCTOR</b> <?php echo $event_conductor; ?> </div>
<div><b>DIRECTOR</b> <?php echo $event_director; ?> </div>
<div><b>WITH</b> <?php echo $actors; ?> </div>

