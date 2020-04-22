<?php
/**
 * View: List View - Single Event Date
 *
 * Override this template in your own theme by creating a file at:
 * [your-theme]/tribe/events/v2/list/event/date.php
 *
 * See more documentation about our views templating system.
 *
 * @link {INSERT_ARTCILE_LINK_HERE}
 *
 * @version 4.9.9
 *
 * @var WP_Post $event The event post object with properties added by the `tribe_get_event` function.
 *
 * @see tribe_get_event() For the format of the event object.
 */
use Tribe__Date_Utils as Dates;

$display_date = empty( $is_past ) && ! empty( $request_date )
    ? max( $event->dates->start_display, $request_date )
    : $event->dates->start_display;

$event_week_day  = $display_date->format_i18n( 'l' );
$event_date_attr = $event->dates->start->format( Dates::DBDATEFORMAT );

$intermission = get_field( "intermission" );

?>

<div class="tribe-events-calendar-list__event-datetime-wrapper tribe-common-b2">
	<?php if ( $event->featured ) : ?>
		<em
			class="tribe-events-calendar-list__event-datetime-featured-icon tribe-common-svgicon tribe-common-svgicon--featured"
			aria-label="<?php esc_attr_e( 'Featured', 'the-events-calendar' ); ?>"
			title="<?php esc_attr_e( 'Featured', 'the-events-calendar' ); ?>"
		>
		</em>
		<span class="tribe-events-calendar-list__event-datetime-featured-text tribe-common-a11y-visual-hide">
			<?php esc_html_e( 'Featured', 'the-events-calendar' ); ?>
		</span>
	<?php endif; ?>
	<time class="tribe-events-calendar-list__event-datetime" datetime="<?php echo esc_attr( $event_date_attr ); ?>">
        <span class="tribe-events-calendar-list__event-date-tag-weekday">
			<?php echo esc_html( $event_week_day ); ?>
		</span>
        <?php echo $event->schedule_details->value(); ?>
	</time>

    <div class="intermission"><?php echo $intermission; ?> </div>

    <div class="event-category">
        <?php
        echo tribe_get_event_categories(
            $this->get( 'post_id' ),
            array(
                'before'       => '',
                'sep'          => ', ',
                'after'        => '',
                'label'        => null, // An appropriate plural/singular label will be provided
                'wrap_before'  => '<div class="tribe-events-event-categories">',
                'wrap_after'   => '</div>',
            )
        );
        ?>
    </div>

	<?php $this->template( 'list/event/date/meta', [ 'event' => $event ] ); ?>
</div>
