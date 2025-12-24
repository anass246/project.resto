@extends('layouts.admin')

@section('content')
    <div class="main-content">
        <header>
            <h1>📦 Orders List</h1>
        </header>

        <div class="table-container" style="margin-top: 20px;">
            <table style="width: 100%; border-collapse: collapse; background: white; box-shadow: 0 4px 6px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden;">
                <thead style="background-color: #800000; color: white;">
                    <tr>
                        <th style="padding: 15px;">ID</th>
                        <th style="padding: 15px;">Client</th>
                        <th style="padding: 15px;">Total (DH)</th>
                        <th style="padding: 15px; width: 30%;">Ordered Items</th> <th style="padding: 15px;">Date</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach($orders as $order)
                    <tr style="border-bottom: 1px solid #e88888ff;">
                        <td style="padding: 15px;">#{{ $order->id }}</td>
                        <td style="padding: 15px; font-weight: bold;">{{ $order->client_name }}</td>
                        <td style="padding: 15px;">{{ $order->total_price }} DH</td>
                        <td style="padding: 15px;">
                            {{-- هنا كنفككو JSON باش تبان الماكلة --}}
                            @if(is_array($order->items))
                                @foreach($order->items as $item)
                                    <div style="margin-bottom: 5px;">
                                        <span style="color: #d4af37; font-weight: bold;">{{ $item['quantity'] }}x</span> 
                                        {{ $item['name'] }}
                                    </div>
                                @endforeach
                            @else
                                <span>No items data</span>
                            @endif
                        </td>
                        <td style="padding: 15px; color: gray;">{{ $order->created_at->format('d/m/Y H:i') }}</td>
                    </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
    </div>
@endsection