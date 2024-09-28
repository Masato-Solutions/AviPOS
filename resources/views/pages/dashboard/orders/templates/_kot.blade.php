<?php
use App\Models\Order;
use App\Classes\Hook;
use Illuminate\Support\Facades\View;

?>
<div class="w-full h-full">
    <div class="w-full md:w-1/2 lg:w-1/3 shadow-lg bg-white p-2 mx-auto">
        <div class="flex items-center justify-center">
            @if ( empty( ns()->option->get( 'ns_invoice_receipt_logo' ) ) )
            <h4 class="text-3xl font-bold">KOT Ticket</h4>
            @else
            <h4 class="text-3xl font-bold">KOT Ticket</h4>
            @endif
        </div>
        <div class="p-2 border-b border-gray-700">	
            <div class="flex flex-wrap -mx-2 text-sm">
                <div class="px-2 w-1/2">
                    {!! nl2br( $ordersService->orderTemplateMapping( 'ns_invoice_receipt_column_a', $order ) ) !!}
                </div>
                <div class="px-2 w-1/2">
                    {!! nl2br( $ordersService->orderTemplateMapping( 'ns_invoice_receipt_column_b', $order ) ) !!}
                </div>
            </div>
        </div>
        <div class="table w-full">
            <table class="w-full">
                <thead>
                    <tr class="font-semibold">
                        <td colspan="2" class="p-2 border-b border-gray-800">{{ __( 'Product' ) }}</td>
                        <td class="p-2 border-b border-gray-800 text-right">{{ __( 'Total' ) }}</td>
                    </tr>
                </thead>
                <tbody class="text-sm">
                    @foreach( Hook::filter( 'ns-receipt-products', $order->combinedProducts ) as $product )
                    <tr>
                        <td colspan="2" class="p-2 border-b border-gray-700">
                            <?php $productName  =   View::make( 'pages.dashboard.orders.templates._kot-product-name', compact( 'product' ) );?>
                            <?php echo Hook::filter( 'ns-receipt-product-name', $productName->render(), $product );?>
                        </td>
                        <td class="p-2 border-b border-gray-800 text-right">{{ $product->quantity }}</td>
                    </tr>
                    @endforeach
                </tbody>
                <tbody>
                    
                </tbody>
            </table>
            @if( $order->note_visibility === 'visible' )
            <div class="pt-6 pb-4 text-center text-gray-800 text-sm">
                <strong>{{ __( 'Note: ' ) }}</strong> {{ $order->note }}
            </div>
            @endif
        </div>
    </div>
</div>
@includeWhen( request()->query( 'autoprint' ) === 'true', '/pages/dashboard/orders/templates/_autoprint' )