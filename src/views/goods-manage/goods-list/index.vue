<template>
    <div class="box">
        <el-button class="new_btn" type="primary" @click="handleNew"
        >新增</el-button
        >
        <el-table :data="studentInfo" border style="width: 100%">
            <el-table-column prop="name" label="姓名" />
            <el-table-column prop="sex" label="性别" />
            <el-table-column prop="age" label="年龄" />
            <el-table-column fixed="right" label="操作">
                <template #default="{ row }">
                    <el-button type="text" size="small" @click="handleDetail(row)"
                    >查看</el-button
                    >
                    <el-button type="text" size="small" @click="handleEdit(row)"
                    >编辑</el-button
                    >
                    <el-button type="text" size="small" @click="handleDel(row)"
                    >删除</el-button
                    >
                </template>
            </el-table-column>
        </el-table>
        <!-- 新建/编辑弹框 -->
        <Dialog
                v-if="dialogShow"
                v-model:dialogShow="dialogShow"
                :rowInfo="rowInfo"
                :title="title"
                :arrayNum="studentInfo.length"
                @addRow="addRow"
                @editRow="editRow"
        />
        <!-- 详情弹窗 -->
        <Detail v-if="detailShow" :rowInfo="rowInfo" @closeDetail="closeDetail" />
    </div>
</template>

<script>
    import { reactive, ref, toRefs } from "vue";
    import { ElMessageBox } from "element-plus";
    import Dialog from "./dialog.vue";
    import Detail from "./detail.vue";

    export default {
        components: { Dialog, Detail },
        setup() {
            const data = reactive({
                dialogShow: false, // 新增/编辑弹框
                detailShow: false, // 详情弹窗
                rowInfo: {}, // 新增/编辑的数据
                title: "", // 是新建还是修改
                studentInfo: [
                    {
                        id: 1,
                        name: "星星",
                        sex: "女",
                        age: 18,
                    },
                    {
                        id: 2,
                        name: "月亮",
                        sex: "男",
                        age: 19,
                    },
                ],
            });
            const method = reactive({
                handleNew() {
                    data.title = "新增";
                    data.rowInfo = {};
                    data.dialogShow = true;
                },
                handleDetail(val) {
                    data.detailShow = true;
                    data.rowInfo = val;
                },
                handleEdit(val) {
                    data.title = "修改";
                    data.dialogShow = true;
                    data.rowInfo = val;
                },
                handleDel(val) {
                    ElMessageBox.confirm("你确定删除这个学生的信息吗?", "提示", {
                        confirmButtonText: "确认",
                        cancelButtonText: "取消",
                        type: "warning",
                    })
                        .then(() => {
                            method.handleSure(val);
                        })
                        .catch(() => {
                            // catch error
                        });
                },
                handleSure(val) {
                    this.dialogVisible = false;
                    const index = data.studentInfo.findIndex((item) => item.id === val.id);
                    data.studentInfo.splice(index, 1);
                },
                // 添加行
                addRow(val) {
                    data.studentInfo.push(val);
                },
                // 编辑行
                editRow(val) {
                    let index = data.studentInfo.findIndex(
                        (item, index) => item.id === val.id
                    );
                    data.studentInfo.splice(index, 1, val);
                },
                // 关闭详情弹窗
                closeDetail() {
                    data.detailShow = false;
                },
            });
            return { ...toRefs(data), ...method };
        },
    };
</script>

<style lang="scss" scoped>
    .box {
        margin: 10px;
        .new_btn {
            margin-bottom: 10px;
        }
        ::v-deep .el-table__cell {
            text-align: center;
        }
    }
</style>
