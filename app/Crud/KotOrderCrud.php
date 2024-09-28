<?php

namespace App\Crud;

use App\Models\Order;

class KotOrderCrud extends HoldOrderCrud
{
    /**
     * Define the autoload status
     */
    const AUTOLOAD = true;

    /**
     * Define the identifier
     */
    const IDENTIFIER = 'ns.kot-orders';

    /**
     * Define Constructor
     */
    public function __construct()
    {
        parent::__construct();
    }

    public function hook( $query ): void
    {
        $query->orderBy( 'created_at', 'desc' );
        $query->where( 'title', Order::PAYMENT_KOT );
		//no order_void
		$query->where( 'payment_status', '!=', Order::PAYMENT_VOID );
    }
}
