<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('nexopos_orders', function (Blueprint $table) {
            //
			$table->float('service_charge', 18, 5)->after('total_coupons')->default(0);
			//add kot_print_count
			$table->integer('kot_print_count')->after('delivery_status')->default(0);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('nexopos_orders', function (Blueprint $table) {
            //
			$table->dropColumn('service_charge');
			$table->dropColumn('kot_print_count');
        });
    }
};
