<template>
    <div @click="kotOrder()" id="kot-button" class="flex-shrink-0 w-1/5 flex items-center font-bold cursor-pointer justify-center bg-orange-500 text-white hover:bg-orange-600 border-r border-orange-600 flex-auto">
        <i class="mr-2 text-2xl lg:text-xl las la-cash-register"></i> 
        <span class="text-lg hidden md:inline lg:text-2xl">{{ __( 'Kot' ) }}</span>
    </div>
</template>
<script lang="ts">
import nsPosHoldOrdersPopupVue from '~/popups/ns-pos-hold-orders-popup.vue';
import nsPosLoadingPopupVue from "~/popups/ns-pos-loading-popup.vue";

declare const nsSnackBar;
declare const ProductsQueue;
declare const CustomerQueue;
declare const TypeQueue;
declare const Popup;
declare const nsHooks;
declare const nsHotPress;
declare const nsShortcuts;
declare const __;
declare const POS;

export default {
    props: [ 'order' ],
    methods: {
        __,
        async kotOrder() {
			if ( this.order.payment_status !== 'kot' && this.order.payments.length > 0 ) {
                return nsSnackBar.error( __( 'Unable to kot an order which kot status has been updated already.' ) ).subscribe();
            }

			const queues    =   nsHooks.applyFilters( 'ns-kot-queue', [
				ProductsQueue,
				CustomerQueue,
				TypeQueue,
			]);

			for( let index in queues ) {
				try {
					const promise   =   new queues[ index ]( this.order );
					const response  =   await promise.run();
				} catch( exception ) {
					/**
					 * in case there is something broken
					 * on the promise, we just stop the queue.
					 */
					return false;    
				}
			}

			/**
             * overriding hold popup
             * This will be useful to inject custom 
             * hold popup.
             */
			 const popup     =   nsHooks.applyFilters( 'ns-override-kot-popup', () => {
                const promise   =   new Promise( ( resolve, reject ) => {
                    //Popup.show( nsPosHoldOrdersPopupVue, { resolve, reject, order : this.order });
					
					console.log("KOT.order")
					resolve({ title: 'kot' });
                });

                promise.then( result => {
                    this.order.title            =   "kot";
                    this.order.payment_status   =   'kot';
                    POS.order.next( this.order );
					//POS.printOrderReceipt( this.order, 'silent' );
					console.log("this.order", this.order)

                    const popup     =   Popup.show( nsPosLoadingPopupVue );
                    
                    POS.submitOrder().then( result => {
						console.log("this.submitOrder", result)
						POS.printKotReceipt( result.data.order, 'silent' );
						//POS.printKotReceipt( result.order, 'silent' );
						console.log("result", result)
                        // @todo add a print snipped here
                        nsSnackBar.success( result.message ).subscribe();
                        popup.close();
                    }, ( error ) => {
						console.log(result.message)
                        // @todo add a print snipped here
                        nsSnackBar.error( error.message ).subscribe();
                        popup.close();
                    });
                }).catch( exception => {
                    console.log( exception );
                })
            });

            popup();
        },
    },
    mounted() {
        /**
         * let's register hotkeys
         */
         for( let shortcut in nsShortcuts ) {
            if ([ 
                    'ns_pos_keyboard_payment', 
                ].includes( shortcut ) ) {
                nsHotPress
                    .create( 'ns_pos_keyboard_payment' )
                    .whenNotVisible([ '.is-popup' ])
                    .whenPressed( nsShortcuts[ shortcut ] !== null ? nsShortcuts[ shortcut ].join( '+' ) : null, ( event ) => {
                        event.preventDefault();
                        this.payOrder();
                });
            }
        }
    },
    unmounted() {
        nsHotPress.destroy( 'ns_pos_keyboard_payment' );
    }
}
</script>