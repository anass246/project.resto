@extends('layouts.admin')

@section('content')
    <div class="container">
        <header class="page-header">
            <h1><i class="fas fa-calendar-check"></i> إدارة الحجوزات</h1>
            <p class="subtitle">عرض وإدارة جميع حجوزات العملاء</p>
        </header>

        <div class="dashboard-cards" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-bottom: 30px;">
            <div class="card" style="background: white; border-radius: 12px; padding: 20px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); border-left: 5px solid #800000;">
                <div class="card-title" style="color: #666; font-size: 14px; margin-bottom: 10px;">إجمالي الحجوزات</div>
                <div class="card-value" style="font-size: 32px; font-weight: bold; color: #800000;">{{ isset($reservations) ? count($reservations) : 0 }}</div>
            </div>
            
            <div class="card" style="background: white; border-radius: 12px; padding: 20px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); border-left: 5px solid #4CAF50;">
                <div class="card-title" style="color: #666; font-size: 14px; margin-bottom: 10px;">الحجوزات المؤكدة</div>
                <div class="card-value" style="font-size: 32px; font-weight: bold; color: #4CAF50;">
                    {{ isset($reservations) ? $reservations->where('status', 'confirmed')->count() : 0 }}
                </div>
            </div>
            
            <div class="card" style="background: white; border-radius: 12px; padding: 20px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); border-left: 5px solid #FF9800;">
                <div class="card-title" style="color: #666; font-size: 14px; margin-bottom: 10px;">الحجوزات القادمة اليوم</div>
                <div class="card-value" style="font-size: 32px; font-weight: bold; color: #FF9800;">
                    {{ isset($reservations) ? $reservations->where('date', today()->format('Y-m-d'))->count() : 0 }}
                </div>
            </div>
        </div>

        <div class="filters-section" style="background: white; padding: 20px; border-radius: 12px; margin-bottom: 25px; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
            <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 15px;">
                <div style="display: flex; gap: 15px; flex-wrap: wrap;">
                    <div class="filter-group">
                        <label style="display: block; margin-bottom: 8px; font-weight: 600; color: #555;">التاريخ</label>
                        <input type="date" id="filter-date" style="padding: 10px 15px; border: 1px solid #ddd; border-radius: 8px; font-size: 14px;">
                    </div>
                    
                    <div class="filter-group">
                        <label style="display: block; margin-bottom: 8px; font-weight: 600; color: #555;">الحالة</label>
                        <select id="filter-status" style="padding: 10px 15px; border: 1px solid #ddd; border-radius: 8px; font-size: 14px; min-width: 150px;">
                            <option value="all">جميع الحالات</option>
                            <option value="confirmed">مؤكدة</option>
                            <option value="pending">قيد الانتظار</option>
                            <option value="cancelled">ملغية</option>
                        </select>
                    </div>
                </div>
                
                <div>
                    <button id="export-btn" style="background: #800000; color: white; border: none; padding: 12px 25px; border-radius: 8px; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 8px;">
                        <i class="fas fa-download"></i> تصدير البيانات
                    </button>
                </div>
            </div>
        </div>

        <div class="table-container" style="background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 6px 15px rgba(0,0,0,0.08);">
            <div class="table-responsive" style="overflow-x: auto;">
                <table style="width: 100%; border-collapse: collapse;">
                    <thead style="background: linear-gradient(135deg, #800000, #a00000); color: white;">
                        <tr>
                            <th style="padding: 18px 15px; text-align: right; font-weight: 600;">#</th>
                            <th style="padding: 18px 15px; text-align: right; font-weight: 600;">العميل</th>
                            <th style="padding: 18px 15px; text-align: right; font-weight: 600;">التواصل</th>
                            <th style="padding: 18px 15px; text-align: right; font-weight: 600;">التاريخ والوقت</th>
                            <th style="padding: 18px 15px; text-align: right; font-weight: 600;">عدد الضيوف</th>
                            <th style="padding: 18px 15px; text-align: right; font-weight: 600;">الحالة</th>
                            <th style="padding: 18px 15px; text-align: right; font-weight: 600;">الإجراءات</th>
                        </tr>
                    </thead>
                    <tbody>
                        @if(isset($reservations) && count($reservations) > 0)
                            @foreach($reservations as $reservation)
                            <tr style="border-bottom: 1px solid #f0f0f0; transition: background-color 0.2s;" 
                                onmouseover="this.style.backgroundColor='#f9f9f9'" 
                                onmouseout="this.style.backgroundColor='white'">
                                <td style="padding: 18px 15px; font-weight: bold; color: #800000;">#{{ $reservation->id }}</td>
                                <td style="padding: 18px 15px;">
                                    <div style="font-weight: 600; color: #333;">{{ $reservation->name }}</div>
                                    @if(isset($reservation->email))
                                    <div style="font-size: 13px; color: #666; margin-top: 3px;">{{ $reservation->email }}</div>
                                    @endif
                                </td>
                                <td style="padding: 18px 15px;">
                                    <div style="display: flex; align-items: center; gap: 8px; color: #333;">
                                        <i class="fas fa-phone" style="color: #800000;"></i>
                                        {{ $reservation->phone }}
                                    </div>
                                    @if(isset($reservation->notes))
                                    <div style="font-size: 12px; color: #888; margin-top: 5px; max-width: 200px;">
                                        <i class="fas fa-sticky-note"></i> {{ Str::limit($reservation->notes, 30) }}
                                    </div>
                                    @endif
                                </td>
                                <td style="padding: 18px 15px;">
                                    <div style="font-weight: 600; color: #333;">{{ \Carbon\Carbon::parse($reservation->date)->format('d/m/Y') }}</div>
                                    <div style="font-size: 14px; color: #666; margin-top: 5px;">
                                        <i class="far fa-clock" style="margin-left: 5px;"></i> {{ $reservation->time }}
                                    </div>
                                </td>
                                <td style="padding: 18px 15px;">
                                    <div style="display: inline-flex; align-items: center; justify-content: center; background: #f0f7ff; color: #0066cc; width: 40px; height: 40px; border-radius: 50%; font-weight: bold; font-size: 16px;">
                                        {{ $reservation->guests }}
                                    </div>
                                </td>
                                <td style="padding: 18px 15px;">
                                    @php
                                        $statusColor = 'green';
                                        $statusBg = '#e7f7ef';
                                        $statusText = 'مؤكدة';
                                        
                                        if(isset($reservation->status)) {
                                            if($reservation->status == 'pending') {
                                                $statusColor = '#FF9800';
                                                $statusBg = '#fff8e1';
                                                $statusText = 'قيد الانتظار';
                                            } elseif($reservation->status == 'cancelled') {
                                                $statusColor = '#f44336';
                                                $statusBg = '#ffebee';
                                                $statusText = 'ملغية';
                                            } elseif($reservation->status == 'completed') {
                                                $statusColor = '#9c27b0';
                                                $statusBg = '#f3e5f5';
                                                $statusText = 'مكتملة';
                                            }
                                        }
                                    @endphp
                                    <span style="display: inline-flex; align-items: center; padding: 8px 15px; border-radius: 20px; font-weight: 600; font-size: 13px; background-color: {{ $statusBg }}; color: {{ $statusColor }};">
                                        @if($reservation->status == 'confirmed')
                                        <i class="fas fa-check-circle" style="margin-left: 5px;"></i>
                                        @elseif($reservation->status == 'pending')
                                        <i class="fas fa-clock" style="margin-left: 5px;"></i>
                                        @elseif($reservation->status == 'cancelled')
                                        <i class="fas fa-times-circle" style="margin-left: 5px;"></i>
                                        @endif
                                        {{ $statusText }}
                                    </span>
                                </td>
                                <td style="padding: 18px 15px;">
                                    <div style="display: flex; gap: 10px;">
                                        <button class="action-btn view-btn" style="background: #2196F3; color: white; border: none; width: 36px; height: 36px; border-radius: 8px; cursor: pointer; display: flex; align-items: center; justify-content: center;" title="عرض التفاصيل">
                                            <i class="fas fa-eye"></i>
                                        </button>
                                        <button class="action-btn edit-btn" style="background: #FF9800; color: white; border: none; width: 36px; height: 36px; border-radius: 8px; cursor: pointer; display: flex; align-items: center; justify-content: center;" title="تعديل">
                                            <i class="fas fa-edit"></i>
                                        </button>
                                        <button class="action-btn delete-btn" style="background: #f44336; color: white; border: none; width: 36px; height: 36px; border-radius: 8px; cursor: pointer; display: flex; align-items: center; justify-content: center;" title="حذف">
                                            <i class="fas fa-trash"></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            @endforeach
                        @else
                            <tr>
                                <td colspan="7" style="padding: 50px 20px; text-align: center; color: #888;">
                                    <div style="font-size: 72px; color: #e0e0e0; margin-bottom: 20px;">
                                        <i class="far fa-calendar-times"></i>
                                    </div>
                                    <h3 style="color: #666; margin-bottom: 10px;">لا توجد حجوزات حتى الآن</h3>
                                    <p style="color: #999; max-width: 500px; margin: 0 auto;">لم يتم العثور على أي حجوزات في النظام. ستظهر هنا عند توفر حجوزات جديدة.</p>
                                </td>
                            </tr>
                        @endif
                    </tbody>
                </table>
            </div>
            
            @if(isset($reservations) && count($reservations) > 0)
            <div class="table-footer" style="padding: 20px; border-top: 1px solid #eee; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 15px;">
                <div style="color: #666; font-size: 14px;">
                    عرض <strong>{{ count($reservations) }}</strong> من إجمالي الحجوزات
                </div>
                
                <div style="display: flex; align-items: center; gap: 10px;">
                    <button class="pagination-btn" style="background: #f5f5f5; border: 1px solid #ddd; padding: 10px 15px; border-radius: 8px; cursor: pointer;">
                        <i class="fas fa-chevron-right"></i>
                    </button>
                    <span style="padding: 0 10px; color: #333; font-weight: 600;">1</span>
                    <button class="pagination-btn" style="background: #f5f5f5; border: 1px solid #ddd; padding: 10px 15px; border-radius: 8px; cursor: pointer;">
                        <i class="fas fa-chevron-left"></i>
                    </button>
                </div>
            </div>
            @endif
        </div>
        
        @if(isset($reservations) && count($reservations) > 0)
        <div class="summary-section" style="margin-top: 30px; background: white; padding: 25px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
            <h3 style="color: #800000; margin-bottom: 20px; border-bottom: 2px solid #f0f0f0; padding-bottom: 10px;">ملخص الحجوزات</h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px;">
                <div style="padding: 15px; background: #f9f9f9; border-radius: 8px;">
                    <div style="font-weight: 600; color: #333; margin-bottom: 10px;">الحجوزات القادمة</div>
                    <div style="display: flex; align-items: center; justify-content: space-between;">
                        <div style="font-size: 24px; font-weight: bold; color: #800000;">
                            {{ $reservations->where('date', '>=', today()->format('Y-m-d'))->count() }}
                        </div>
                        <i class="fas fa-calendar-alt" style="font-size: 24px; color: #800000;"></i>
                    </div>
                </div>
                
                <div style="padding: 15px; background: #f9f9f9; border-radius: 8px;">
                    <div style="font-weight: 600; color: #333; margin-bottom: 10px;">متوسط عدد الضيوف</div>
                    <div style="display: flex; align-items: center; justify-content: space-between;">
                        <div style="font-size: 24px; font-weight: bold; color: #4CAF50;">
                            {{ round($reservations->avg('guests') ?? 0, 1) }}
                        </div>
                        <i class="fas fa-users" style="font-size: 24px; color: #4CAF50;"></i>
                    </div>
                </div>
                
                <div style="padding: 15px; background: #f9f9f9; border-radius: 8px;">
                    <div style="font-weight: 600; color: #333; margin-bottom: 10px;">الحجوزات خلال هذا الشهر</div>
                    <div style="display: flex; align-items: center; justify-content: space-between;">
                        <div style="font-size: 24px; font-weight: bold; color: #2196F3;">
                            {{ $reservations->where('date', '>=', now()->startOfMonth()->format('Y-m-d'))->count() }}
                        </div>
                        <i class="fas fa-chart-line" style="font-size: 24px; color: #2196F3;"></i>
                    </div>
                </div>
            </div>
        </div>
        @endif
    </div>

    <style>
        .container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 25px;
        }
        
        .page-header {
            margin-bottom: 35px;
        }
        
        .page-header h1 {
            color: #800000;
            font-size: 32px;
            margin-bottom: 8px;
            display: flex;
            align-items: center;
            gap: 15px;
        }
        
        .page-header .subtitle {
            color: #666;
            font-size: 16px;
        }
        
        .action-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            transition: all 0.2s;
        }
        
        .pagination-btn:hover {
            background-color: #e0e0e0 !important;
            transition: background-color 0.2s;
        }
        
        @media (max-width: 768px) {
            .container {
                padding: 15px;
            }
            
            .dashboard-cards {
                grid-template-columns: 1fr !important;
            }
            
            .filters-section > div {
                flex-direction: column;
                align-items: flex-start !important;
            }
            
            .table-footer {
                flex-direction: column;
                align-items: flex-start !important;
            }
            
            th, td {
                padding: 12px 10px !important;
                font-size: 14px;
            }
        }
    </style>
    
    <script>
        // JavaScript للتفاعل مع الحجوزات
        document.addEventListener('DOMContentLoaded', function() {
            // فلترة حسب التاريخ
            const dateFilter = document.getElementById('filter-date');
            if(dateFilter) {
                dateFilter.addEventListener('change', function() {
                    // كود الفلترة حسب التاريخ
                    console.log('Filter by date:', this.value);
                });
            }
            
            // فلترة حسب الحالة
            const statusFilter = document.getElementById('filter-status');
            if(statusFilter) {
                statusFilter.addEventListener('change', function() {
                    // كود الفلترة حسب الحالة
                    console.log('Filter by status:', this.value);
                });
            }
            
            // تصدير البيانات
            const exportBtn = document.getElementById('export-btn');
            if(exportBtn) {
                exportBtn.addEventListener('click', function() {
                    // كود تصدير البيانات
                    alert('سيتم تصدير البيانات قريبًا...');
                });
            }
            
            // أزرار الإجراءات
            document.querySelectorAll('.view-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    const reservationId = this.closest('tr').querySelector('td:first-child').textContent.replace('#', '');
                    alert('عرض تفاصيل الحجز رقم: ' + reservationId);
                });
            });
            
            document.querySelectorAll('.edit-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    const reservationId = this.closest('tr').querySelector('td:first-child').textContent.replace('#', '');
                    alert('تعديل الحجز رقم: ' + reservationId);
                });
            });
            
            document.querySelectorAll('.delete-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    const reservationId = this.closest('tr').querySelector('td:first-child').textContent.replace('#', '');
                    if(confirm('هل أنت متأكد من حذف الحجز رقم ' + reservationId + '؟')) {
                        alert('سيتم حذف الحجز رقم: ' + reservationId);
                    }
                });
            });
        });
    </script>
@endsection