// **Generic Examples *************************************1**********************************
function enqueueJob(job) {
    job.name;
    return {
        job: job,
        state: "queued",
        onComplete: function (cb) { return cb(job); },
    };
}
var j = {
    recipentEmail: "alice@gmail",
    subject: "hii",
    name: "send-email",
    start: function () { return null; },
    state: "inComplete",
};
var run = enqueueJob(j);
console.log(run);
run.onComplete(function (job) {
    console.log(job);
});
