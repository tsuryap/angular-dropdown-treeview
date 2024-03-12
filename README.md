# angular-dropdown-treeview
Dropdown tree view component
Dim objExcel, objWorkbook, objWorksheet1, objWorksheet2
Dim rowCount1, rowCount2, colCount, i, j

' Create Excel object
Set objExcel = CreateObject("Excel.Application")
objExcel.Visible = False ' Set to True if you want to see Excel

' Open the workbook
Set objWorkbook = objExcel.Workbooks.Open("path_to_your_workbook.xlsx")

' Assuming the sheets are named "Sheet1" and "Sheet2"
Set objWorksheet1 = objWorkbook.Sheets("Sheet1")
Set objWorksheet2 = objWorkbook.Sheets("Sheet2")

' Get the row and column counts
rowCount1 = objWorksheet1.UsedRange.Rows.Count
rowCount2 = objWorksheet2.UsedRange.Rows.Count
colCount = objWorksheet1.UsedRange.Columns.Count

' Loop through rows in both sheets and compare values
For i = 1 To rowCount1
    Dim foundMatch
    foundMatch = False
    
    ' Look for a matching row in the second sheet
    For j = 1 To rowCount2
        Dim match
        match = True

        ' Compare values in each column
        For k = 1 To colCount
            If objWorksheet1.Cells(i, k).Value <> objWorksheet2.Cells(j, k).Value Then
                match = False
                Exit For
            End If
        Next

        ' If a match is found, set the flag and exit the loop
        If match Then
            foundMatch = True
            Exit For
        End If
    Next

    ' If no match is found, print the difference
    If Not foundMatch Then
        WScript.Echo "Difference found in Row " & i
    End If
Next

' Close workbook and release objects
objWorkbook.Close False
objExcel.Quit
Set objWorksheet1 = Nothing
Set objWorksheet2 = Nothing
Set objWorkbook = Nothing
Set objExcel = NothingDim objExcel, objWorkbook, objWorksheet1, objWorksheet2
Dim rowCount1, rowCount2, colCount, i, j

' Create Excel object
Set objExcel = CreateObject("Excel.Application")
objExcel.Visible = False ' Set to True if you want to see Excel

' Open the workbook
Set objWorkbook = objExcel.Workbooks.Open("path_to_your_workbook.xlsx")

' Assuming the sheets are named "Sheet1" and "Sheet2"
Set objWorksheet1 = objWorkbook.Sheets("Sheet1")
Set objWorksheet2 = objWorkbook.Sheets("Sheet2")

' Get the row and column counts
rowCount1 = objWorksheet1.UsedRange.Rows.Count
rowCount2 = objWorksheet2.UsedRange.Rows.Count
colCount = objWorksheet1.UsedRange.Columns.Count

' Loop through rows in both sheets and compare values
For i = 1 To rowCount1
    Dim foundMatch
    foundMatch = False
    
    ' Look for a matching row in the second sheet
    For j = 1 To rowCount2
        Dim match
        match = True

        ' Compare values in each column
        For k = 1 To colCount
            If objWorksheet1.Cells(i, k).Value <> objWorksheet2.Cells(j, k).Value Then
                match = False
                Exit For
            End If
        Next

        ' If a match is found, set the flag and exit the loop
        If match Then
            foundMatch = True
            Exit For
        End If
    Next

    ' If no match is found, print the difference
    If Not foundMatch Then
        WScript.Echo "Difference found in Row " & i
    End If
Next

' Close workbook and release objects
objWorkbook.Close False
objExcel.Quit
Set objWorksheet1 = Nothing
Set objWorksheet2 = Nothing
Set objWorkbook = Nothing
Set objExcel = Nothing
